const { test, expect } = require('@playwright/test');

test('login to Rahul Shetty Academy practice site', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // fill credentials (example values from common tutorials)
  await page.fill("input#username", 'rahulshettyacademy');
  await page.fill("input#password", 'learning');

  // click sign in and wait for navigation to shop
  await Promise.all([
    page.waitForURL(/.*shop.*/,{ timeout: 10000 }),
    page.click('#signInBtn')
  ]);

  await expect(page).toHaveURL(/.*shop.*/);
});
