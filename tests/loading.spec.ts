import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState("load");
    await expect(page.locator('[role=progressbar]')).toHaveCount(0);
});
