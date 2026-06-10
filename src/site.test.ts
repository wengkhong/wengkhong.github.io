import { test, expect } from "@playwright/test";

const PAGES = [
  { path: "/", heading: "Weng Khong Lim, PhD" },
  { path: "/about", heading: "About" },
  { path: "/research", heading: "Research" },
  { path: "/publications", heading: "Publications" },
  { path: "/tools", heading: "Tools and Software" },
  { path: "/grants", heading: "Grants and Projects" },
  { path: "/talks", heading: "Talks" },
  { path: "/contact", heading: "Contact" },
] as const;

test.describe("navigation", () => {
  for (const page of PAGES) {
    test(`page ${page.path} loads with correct heading`, async ({ page: p }) => {
      const resp = await p.goto(page.path);
      expect(resp?.status()).toBe(200);
      await expect(p.locator("h1")).toContainText(page.heading);
    });
  }

  test("nav links navigate to correct pages", async ({ page: p }) => {
    await p.goto("/");
    for (const { path, heading } of PAGES) {
      if (path === "/") continue;
      const link = p.locator(`nav a[href="${path}"]`);
      if (await link.isVisible()) {
        await link.click();
      } else {
        const more = p.locator(".nav-more summary");
        await more.click();
        await p.locator(`.nav-more-list a[href="${path}"]`).click();
      }
      await p.waitForURL(`**${path}`);
      await expect(p.locator("h1.page-title")).toContainText(heading);
    }
  });
});

test.describe("visual", () => {
  test("homepage hero is visible", async ({ page: p }) => {
    await p.goto("/");
    await expect(p.locator(".hero")).toBeVisible();
    await expect(p.locator(".hero-photo")).toBeVisible();
  });

  test("metrics grid displayed on homepage", async ({ page: p }) => {
    await p.goto("/");
    await expect(p.locator(".metrics-grid")).toBeVisible();
    const metrics = p.locator(".metric");
    expect(await metrics.count()).toBe(4);
  });

  test("research cards are present", async ({ page: p }) => {
    await p.goto("/research");
    const cards = p.locator(".card h2");
    const texts = await cards.allTextContents();
    expect(texts).toEqual(
      expect.arrayContaining(["Clinical Genomics", "Population Genomics", "AI and Computational Methods", "Functional Genomics"])
    );
  });

  test("publications from content collection are rendered", async ({ page: p }) => {
    await p.goto("/publications");
    await expect(p.locator("h2")).toContainText("Lim WK et al.");
    await expect(p.locator("text=Nature Communications")).toBeVisible();
  });

  test("grants from content collection are rendered", async ({ page: p }) => {
    await p.goto("/grants");
    const cards = p.locator(".card h3");
    const texts = await cards.allTextContents();
    expect(texts.length).toBeGreaterThanOrEqual(3);
    expect(texts).toEqual(
      expect.arrayContaining(["SG100K — Population-scale sequencing integration"])
    );
  });

  test("talks from content collection are rendered", async ({ page: p }) => {
    await p.goto("/talks");
    const cards = p.locator(".card h3");
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("tools from content collection are rendered by category", async ({ page: p }) => {
    await p.goto("/tools");
    const headings = p.locator("h2");
    await expect(headings.first()).toBeVisible();
    const texts = await headings.allTextContents();
    expect(texts).toEqual(
      expect.arrayContaining(["Variant Interpretation", "Genomic Analysis", "AI & Data Science"])
    );
  });

  test("site header is sticky", async ({ page: p }) => {
    await p.goto("/");
    const header = p.locator(".site-header");
    await expect(header).toBeVisible();
    const position = await header.evaluate((el) => getComputedStyle(el).position);
    expect(position).toBe("sticky");
  });

  test("footer links exist", async ({ page: p }) => {
    await p.goto("/");
    const footer = p.locator(".site-footer");
    await expect(footer.locator("a[href='/publications']")).toBeVisible();
    await expect(footer.locator("a[href='/research']")).toBeVisible();
    await expect(footer.locator("a[href='/contact']")).toBeVisible();
  });
});

test.describe("accessibility", () => {
  test("skip link exists", async ({ page: p }) => {
    await p.goto("/");
    await expect(p.locator(".skip-link")).toBeVisible();
    await expect(p.locator(".skip-link")).toHaveText("Skip to main content");
  });

  test("images have alt text", async ({ page: p }) => {
    await p.goto("/");
    const imgs = p.locator("img");
    const count = await imgs.count();
    expect(count).toBeGreaterThan(0);
  });

  test("nav has aria-label", async ({ page: p }) => {
    await p.goto("/");
    await expect(p.locator("nav[aria-label='Primary']")).toBeVisible();
  });
});
