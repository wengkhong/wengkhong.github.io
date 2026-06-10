import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "npm run dev -- --port 4322",
    url: "http://localhost:4322",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
  use: {
    baseURL: "http://localhost:4322",
    viewport: { width: 1280, height: 800 },
  },
  testMatch: "src/**/*.test.ts",
});
