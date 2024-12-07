import {test} from '@playwright/test'

test.beforeEach( 'locators', async ({page}) => {
await page.goto('https://the-internet.herokuapp.com/');
await page.getByText('Form Authentication').click();

})

test('locators', async({page}) => {
    //by tag name
    await page.locator('input').first().click();

    //by id
    page.locator('#username');

    //by Class value
    page.locator(".fa-sign-in");

    //by attribute
    page.locator('[name="username"]');

    //by full Class value
    await page.locator('[class="fa fa-2x fa-sign-in"]').click();

    //combine selectors
    page.locator('input#username');

    //by Xpath
    // page.locator('//*[name="username"]');

    //by partial text match
    page.locator(':text("where you can")')

    //by exact text match
    page.locator(':text-is("Login Page")')

});

test.only('User-Facing locators', async({page}) =>{
    await page.getByRole('button', {name: "Login"}).click();
    await page.getByLabel('Username').click();
});


