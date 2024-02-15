const { test, expect, chromium } = require('@playwright/test');

test('Rozetka', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/ua/');
    await expect(page).toHaveTitle(/Інтернет-магазин/);
    await page.getByPlaceholder('Я шукаю').click();
    await page.getByPlaceholder('Я шукаю').fill('навушники');
    await page.getByPlaceholder('Я шукаю').press('Enter');
    await expect(page).toHaveTitle(/навушники/);
    await page.close();
});
test('Укрзалізниця', async ({ page }) => {
    await page.goto('https://www.uz.gov.ua/');
    await page.getByText("Про нас").hover();
    await page.getByRole('link', { name: 'Загальна інформація' }).click();
    await expect(page.locator('.current')).toHaveText('Загальна інформація');
    await page.close();
});
test('Citrus', async ({ page }) => {
    await page.goto('https://www.ctrs.com.ua/');
    await page.getByRole('link', { name: 'Цитрус Майстер' }).click();
    await page.getByRole('link', { name: 'Ґаджети' }).click();
    await expect(page).toHaveTitle(/Цитрус Майстер/);
    await page.close();
});
test('Citrus 2', async ({ page }) => {
    await page.goto('https://www.ctrs.com.ua/');
    await page.getByRole('link', { name: 'Клієнтам', exact: true }).hover();
    await page.getByRole('link', { name: 'Гарантія та обмін' }).click();
    await expect(page).toHaveTitle(/Гарантія та сервісне обслуговування/);
    await page.close();
});
test('Allo', async ({ page }) => {
    await page.goto('https://allo.ua/');
    await page.getByRole('button', { name: 'Київ' }).click();
    await page.getByRole('link', { name: 'Полтава' }).click();
    await expect(page.locator('.mh-loc__label')).toHaveText('Полтава, Полтавська обл.');
    await page.close();
});
test('Rozetka_katalog', async ({page}) => {
    await page.goto('https://rozetka.com.ua/ua/');
    await expect(page).toHaveTitle(/Інтернет-магазин/);
    await page.getByRole('button', { name: 'Каталог' }).click();
    await page.getByRole('link', { name: 'Блоки живлення' }).click();
    await expect(page.locator('.catalog-heading')).toHaveText('Блоки живлення');
    await page.close();
});
