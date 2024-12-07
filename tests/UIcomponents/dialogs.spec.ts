import { test, expect } from '@playwright/test';

test.beforeEach( 'locators', async ({page}) => {
    await page.goto('https://demoqa.com/alerts');

    });
//browser dialog boxes(db) does not belong to HTML structure of the page
//playwright automathically identify this type of db and cancel it by default

    test('Confirm Browser dialog', async({page}) =>{
        page.on('dialog', dialog =>{
            expect(dialog.message()).toEqual('Do you confirm action?')
            dialog.accept()
        })
        await page.locator('#confirmButton').click()

        const testResult = await page.locator('#confirmResult').textContent()
        expect(testResult).toEqual('You selected Ok')


    })
     //where page.on is a listener listening for dialog and should be located before the button click