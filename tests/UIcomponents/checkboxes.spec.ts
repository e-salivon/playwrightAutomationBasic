import { test, expect } from '@playwright/test';

test.beforeEach( 'locators', async ({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form');   
    });

    // Test-case:
    // 1. Find all checkboxes
    // 2. Change status of all checkboxes to 'checked'
    // 3. Check all checkboxes are checked
test('All checkboxes can be checked', async ({page}) =>{

//  page.getByRole('checkbox', {name: "Sports"}).click();
 const allCheckboxes = page.getByRole('checkbox');
 for(const box of await allCheckboxes.all()){
    await box.check({force:true});
    expect(await box.isChecked()).toBeTruthy();

}});

test('All checkboxes can be unchecked', async ({page}) =>{
    const allCheckboxes = page.getByRole('checkbox');
    for(const box of await allCheckboxes.all()){
        await box.uncheck();
        expect(await box.isChecked()).toBeFalsy();
    }
    
});