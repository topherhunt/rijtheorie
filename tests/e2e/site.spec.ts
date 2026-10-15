import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';

const LESSON = '/es/prioridad/regla-derecha/';
const STORAGE_KEY = 'rijtheorie:v1';

/** Accept every confirm() dialog (reset, import, finishing an exam early). */
const acceptDialogs = (page: Page) => page.on('dialog', (d) => d.accept());

async function seed(page: Page, state: object) {
  await page.addInitScript(([k, v]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, v); }, [STORAGE_KEY, JSON.stringify(state)]);
}
/** A question card inside a hydrated island. Lesson quizzes are client:visible, so scroll first; clicks on SSR markup do nothing. */
async function question(page: Page, id: string) {
  const island = page.locator(`astro-island:has(.qa-quiz .qa-q-${id})`).last();
  await island.scrollIntoViewIfNeeded();
  await expect(island).not.toHaveAttribute('ssr');
  return island.locator(`.qa-q-${id}`);
}
const emptyState ={ version: 1, answers: {}, log: [], placements: [], done: {}, notes: {}, exams: [] };

test('the home page warns that the course is unofficial, with report and about links', async ({ page }) => {
  await page.goto('/es/');
  const warning = page.locator('.qa-disclaimer');
  await expect(warning).toContainText('no es oficial');
  await expect(warning.locator('.qa-home-report')).toHaveAttribute('href', /\/issues\/new\?template=problema\.yml$/);
  await expect(warning.locator('.qa-home-about')).toHaveAttribute('href', '/es/acerca/');
});

test('every page has a report link that carries the page path and explains itself in a tooltip', async ({ page }) => {
  await page.goto(LESSON);
  const report = page.locator('.qa-report-link');
  await expect(report).toHaveAttribute('data-tip', /Errores/);
  await expect(report).toHaveAttribute('href', /\/issues\/new\?template=problema\.yml&url=%2Fes%2Fprioridad%2Fregla-derecha%2F$/);
});

test('lesson quiz: a correct answer shows correct feedback, a wrong one shows the explanation and source', async ({ page }) => {
  await page.goto(LESSON);
  const right = await question(page, 'regla-derecha-basica');
  await right.locator('.qa-option').nth(1).click();
  await right.locator('.qa-check').click();
  await expect(right.locator('.qa-feedback-correct')).toBeVisible();

  const wrong = await question(page, 'regla-derecha-tierra');
  await wrong.locator('.qa-option').nth(0).click();
  await wrong.locator('.qa-check').click();
  await expect(wrong.locator('.qa-feedback-wrong')).toBeVisible();
  await expect(wrong.locator('.qa-feedback-wrong .qa-cite')).toHaveAttribute('href', /wetten\.overheid\.nl.*BWBR0004825.*artikel=15/);
});

test('marking a lesson read shows a checkmark next to it on the home page', async ({ page }) => {
  await page.goto(LESSON);
  await page.locator('.qa-mark-done').check();
  await page.goto('/es/');
  const row = page.locator(`.qa-lesson-row:has(a.qa-lesson-link[href$="${LESSON}"])`);
  await expect(row.locator('.qa-done-mark')).toBeVisible();
});

test('the home page counts the questions of a lesson whose latest answer is correct', async ({ page }) => {
  await page.goto(LESSON);
  const q = await question(page, 'regla-derecha-basica');
  await q.locator('.qa-option').nth(1).click();
  await q.locator('.qa-check').click();
  await expect(q.locator('.qa-feedback-correct')).toBeVisible();
  await page.goto('/es/');
  const score = page.locator(`.qa-lesson-row:has(a.qa-lesson-link[href$="${LESSON}"]) .qa-lesson-score`);
  await expect(score).toHaveText(/^1 \/ \d+$/);
});

test('on a phone each lesson row puts a labelled score and read status under the title', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto(LESSON);
  await page.locator('.qa-mark-done').check();
  await page.goto('/es/');
  const read = page.locator(`.qa-lesson-row:has(a.qa-lesson-link[href$="${LESSON}"])`);
  await expect(read).toContainText(/Correctas: \d+ \/ \d+/);
  await expect(read).toContainText('Leída');
  const title = await read.locator('.qa-lesson-link').boundingBox();
  const score = await read.locator('.qa-lesson-score').boundingBox();
  expect(score!.y).toBeGreaterThan(title!.y + title!.height - 1);
  await expect(page.locator('.qa-lesson-row').nth(1).locator('.qa-unread')).toBeVisible();
});

// The visit is written in an effect that runs after paint, so wait for the store rather than for hydration.
const lastLessonId = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('rijtheorie:v1') ?? '{}').lastLesson?.id);
const visitRecorded = (page: Page, id: string) => expect.poll(() => lastLessonId(page)).toBe(id);

test('the home page offers the first unfinished lesson, and "continue" only when the last lesson opened is a different one', async ({ page }) => {
  await page.goto('/es/');
  const next = page.locator('.qa-next-lesson');
  const firstHref = await page.locator('.qa-lesson-link').first().getAttribute('href');
  await expect(next).toHaveAttribute('href', firstHref!);
  await expect(page.locator('.qa-continue-lesson')).toHaveCount(0);

  await page.goto(LESSON);
  await visitRecorded(page, 'es/prioridad/01-regla-derecha');
  await page.goto('/es/');
  await expect(page.locator('.qa-continue-lesson')).toHaveAttribute('href', LESSON);
  await expect(next).toHaveAttribute('href', firstHref!);

  await page.goto(firstHref!);
  await expect.poll(() => lastLessonId(page)).not.toBe('es/prioridad/01-regla-derecha');
  await page.goto('/es/');
  await expect(next).toHaveAttribute('href', firstHref!);
  await expect(page.locator('.qa-continue-lesson')).toHaveCount(0);
});

test('the theme toggle switches to dark mode and the choice survives a reload', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/es/');
  const html = page.locator('html');
  await expect(html).toHaveAttribute('data-theme', 'light');
  await page.locator('.qa-theme-toggle').click();
  await expect(html).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(html).toHaveAttribute('data-theme', 'dark');
});

test('the nav marks the current section: Curso on a lesson, Glosario on the glossary', async ({ page }) => {
  await page.goto(LESSON);
  await expect(page.locator('.qa-nav-active')).toHaveCount(1);
  await expect(page.locator('.qa-nav-active')).toHaveAttribute('href', '/es/');
  await page.goto('/es/glosario/');
  await expect(page.locator('.qa-nav-active')).toHaveCount(1);
  await expect(page.locator('.qa-nav-active')).toHaveAttribute('href', '/es/glosario/');
  await expect(page.locator('.qa-nav-active')).toHaveAttribute('aria-current', 'page');
});

test('every page links the favicon', async ({ page }) => {
  await page.goto('/es/');
  const icon = await page.locator('link[rel="icon"][type="image/svg+xml"]').getAttribute('href');
  const res = await page.request.get(icon!);
  expect(await res.text()).toContain('#ea580c');
});

test('a lesson note survives a reload and is listed on the notes page', async ({ page }) => {
  await page.goto(LESSON);
  await page.locator('.qa-note').fill('Derecha primero, salvo tierra y tranvía');
  await page.locator('.qa-note').blur();
  await page.reload();
  await expect(page.locator('.qa-note')).toHaveValue('Derecha primero, salvo tierra y tranvía');
  await page.goto('/es/notas/');
  await expect(page.locator('.qa-notes')).toContainText('Derecha primero, salvo tierra y tranvía');
});

test('the mock exam is locked for a new learner, with all four mastery checks pending and a placement test offered', async ({ page }) => {
  await page.goto('/es/examen/');
  await expect(page.locator('.qa-exam-locked')).toBeVisible();
  await expect(page.locator('.qa-gate-pending')).toHaveCount(4);
  await expect(page.locator('.qa-exam-start')).toHaveCount(0);
  await expect(page.locator('.qa-placement-start')).toBeEnabled();
});

test('the placement test has 20 questions', async ({ page }) => {
  await page.goto('/es/examen/');
  await page.locator('.qa-placement-start').click();
  await expect(page.locator('.qa-exam-counter')).toHaveText('Pregunta 1 / 20');
});

test('a failed placement test blocks a new attempt for 24 hours', async ({ page }) => {
  await seed(page, { ...emptyState, placements: [{ at: new Date().toISOString(), score: 3, total: 4, passed: false }] });
  await page.goto('/es/examen/');
  await expect(page.locator('.qa-placement-locked')).toBeVisible();
  await expect(page.locator('.qa-placement-start')).toHaveCount(0);
});

test('after a passed placement test the mock exam runs and records a result on the progress page', async ({ page }) => {
  acceptDialogs(page);
  await seed(page, { ...emptyState, placements: [{ at: new Date().toISOString(), score: 40, total: 40, passed: true }] });
  await page.goto('/es/examen/');
  await page.locator('.qa-exam-start').click();
  await expect(page.locator('.qa-exam-running')).toBeVisible();
  await page.locator('.qa-exam-finish').click();
  await expect(page.locator('.qa-exam-score')).toHaveText(/^0 \/ \d+$/);
  await page.goto('/es/progreso/');
  await expect(page.locator('.qa-exam-history tbody tr')).toHaveCount(1);
  await expect(page.locator('.qa-gate-unlocked')).toBeVisible();
});

test('progress export, reset and import restore the learner state', async ({ page }) => {
  acceptDialogs(page);
  await page.goto(LESSON);
  await page.locator('.qa-mark-done').check();
  await page.goto('/es/progreso/');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.locator('.qa-export').click()]);
  const file = await dl.path();
  expect(JSON.parse(readFileSync(file, 'utf8')).done).toHaveProperty('es/prioridad/01-regla-derecha');

  await page.locator('.qa-reset').click();
  await page.goto(LESSON);
  await expect(page.locator('.qa-mark-done')).not.toBeChecked();

  await page.goto('/es/progreso/');
  await page.locator('.qa-import').setInputFiles(file);
  await expect(page.locator('.qa-import-msg')).toHaveClass(/text-emerald/);
  await page.goto(LESSON);
  await expect(page.locator('.qa-mark-done')).toBeChecked();
});

test('importing an invalid progress file shows an error and keeps the current progress', async ({ page }) => {
  acceptDialogs(page);
  await page.goto(LESSON);
  await page.locator('.qa-mark-done').check();
  await page.goto('/es/progreso/');
  await page.locator('.qa-import').setInputFiles({ name: 'bad.json', mimeType: 'application/json', buffer: Buffer.from('{"version":99}') });
  await expect(page.locator('.qa-import-msg')).toHaveClass(/text-red/);
  await page.goto(LESSON);
  await expect(page.locator('.qa-mark-done')).toBeChecked();
});

test('the glossary filter hides terms that do not match', async ({ page }) => {
  await page.goto('/es/glosario/');
  const terms = page.locator('.qa-glossary-term');
  const total = await terms.count();
  await page.locator('.qa-glossary-filter').fill('haaientanden');
  await expect(page.locator('.qa-glossary-term:visible')).toHaveCount(1);
  await expect(page.locator('.qa-glossary-term:visible')).toHaveAttribute('id', 'haaientanden');
  await page.locator('.qa-glossary-filter').fill('');
  await expect(page.locator('.qa-glossary-term:visible')).toHaveCount(total);
});

test('a lesson with secondary-source content shows the notice and marks those rules; a law-only lesson does not', async ({ page }) => {
  await page.goto('/es/leyes/kenteken-apk-seguro/');
  await expect(page.locator('.qa-secondary-notice')).toBeVisible();
  const rule = page.locator('.qa-rule-secondary').first();
  await expect(rule.locator('.qa-secondary')).toBeVisible();
  await expect(rule.locator('.qa-cite')).toHaveAttribute('href', /anwb\.nl/);

  await page.goto(LESSON);
  await expect(page.locator('.qa-secondary-notice')).toHaveCount(0);
  await expect(page.locator('.qa-rule-secondary')).toHaveCount(0);
});

test('the traffic-agents lesson shows all 8 official hand signals', async ({ page }) => {
  await page.goto('/es/senales/agentes-y-controladores/');
  const imgs = page.locator('.qa-gestures img');
  await expect(imgs).toHaveCount(8);
  for (const img of await imgs.all()) {
    const res = await page.request.get((await img.getAttribute('src'))!);
    expect(res.headers()['content-type']).toBe('image/webp');
  }
});

test('about page links the repo and the author', async ({ page }) => {
  await page.goto('/es/acerca/');
  await expect(page.locator('.qa-about-repo')).toHaveAttribute('href', 'https://github.com/topherhunt/rijtheorie');
  await expect(page.locator('.qa-about-made-by a')).toHaveAttribute('href', 'https://topherhunt.com');
});
