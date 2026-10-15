// Placeholder until the public GitHub repo exists; the report-a-problem link and footer use it.
export const REPO_URL = 'https://github.com/OWNER/rijtheorie';

export const SITE_NAME = 'Rijtheorie en español';

/** Prefix an internal path with the configured base (BASE_PATH), keeping exactly one slash between parts. */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
