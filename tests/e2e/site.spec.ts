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

test('every page shows the unofficial disclaimer and a report link that carries the page path', async ({ page }) => {
  await page.goto(LESSON);
  await expect(page.locator('.qa-disclaimer')).toBeVisible();
  const report = page.locator('.qa-report-link');
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
  const item = page.locator(`li:has(> a.qa-lesson-link[href$="${LESSON}"])`);
  await expect(item.locator('.qa-done-mark')).toBeVisible();
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
