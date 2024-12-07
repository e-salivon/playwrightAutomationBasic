import {test, expect} from '@playwright/test';

test.beforeEach('Click the button', async ({page}) =>  {
    await page.goto('http://www.uitestingplayground.com/ajax');
    await page.locator('#ajaxButton').click()
});

//with textContent it's autowaiting works
test('autoWait', async({page}) => {
    const message = await page.locator('.bg-success');
    const messageText = await message.textContent();
    expect(messageText).toEqual('Data loaded with AJAX get request.')
});

// there are some other methods where autowaiting does not work
test('waitFor', async({page}) => {
    const successMessage = await page.locator('.bg-success');
    await successMessage.waitFor({state: "visible"}); // waiting for the element is visible, can also select another options like attached, hidden, detached
    const successMessageText = await successMessage.allTextContents();

});

// alternative waits

test('waitForOptions', async({page})=>{
    const successMessage = await page.locator('.bg-success');
    //wait for element
    await page.waitForSelector('.bg-success');
     //wait for response
     await page.waitForResponse('https://www.uitestingplayground.com/ajaxdata')

}) 