import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  use: { baseURL: 'http://localhost:4330' },
  // --ignore-lock keeps astro in the foreground (it backgrounds itself when it detects an AI agent) so Playwright owns the process.
  webServer: { command: 'npx astro preview --port 4330 --ignore-lock', url: 'http://localhost:4330/es/', reuseExistingServer: false },
});
