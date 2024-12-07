import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/date-picker");
  });

  test('Date Picker', async({page}) =>{
    await page.locator('#datePickerMonthYear').click();
    
  })