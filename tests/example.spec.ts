import { test, expect } from '@playwright/test';

test('homepage has correct title and elements', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ShopSmart/);

  // Expect the main heading to be visible
  const heading = page.locator('h1', { hasText: 'ShopSmart' });
  await expect(heading).toBeVisible();

  // Expect status container
  const statusEl = page.locator('.card h2', { hasText: 'Backend Status' });
  await expect(statusEl).toBeVisible();
});
