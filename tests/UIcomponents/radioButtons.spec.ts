import { test, expect } from '@playwright/test';


test.beforeEach( 'locators', async ({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form');   
    });

test('Click the radio button', async({page}) =>{
    const radioButton = await page.locator('[for="gender-radio-1"]');
    await radioButton.check();
    const radioStatus = await radioButton.isChecked();
    expect(radioStatus).toEqual(true);
});

test('Change the radio button', async({page}) =>{
    const radioButton1 = await page.locator('[for="gender-radio-1"]');
    await radioButton1.check();
    const radioStatus1 = await radioButton1.isChecked();
    expect(radioStatus1).toEqual(true);
    const radioButton2 = await page.locator('[for="gender-radio-2"]');
    await radioButton2.check();
    const radioNewStatus1 = await radioButton1.isChecked();
    const radioStatus2 = await radioButton2.isChecked()
    expect(radioNewStatus1).toEqual(false);
    expect(radioStatus2).toEqual(true);


} );



