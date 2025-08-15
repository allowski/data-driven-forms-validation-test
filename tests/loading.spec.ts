import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('progressbar', {name: 'first'})).toBeVisible();
    await expect(page.getByRole('progressbar', {name: 'second'})).toBeVisible();
    await expect(page.getByRole('progressbar', {name: 'last'})).toBeVisible();
    await expect(page.getByRole('progressbar', {name: 'first'})).toBeHidden();
    await expect(page.getByRole('progressbar', {name: 'second'})).toBeHidden();
    await expect(page.getByRole('progressbar', {name: 'last'})).toBeHidden();
});
