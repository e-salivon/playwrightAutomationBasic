import { test, expect } from '@playwright/test';

test.beforeEach( 'locators', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByText('Form Authentication').click();
    
    });

    test('User Name Field', async({page}) =>{
        const usernameFileld = page.locator('#username');
        await usernameFileld.fill('Ilon Mask');

        //locator accertion
        expect(usernameFileld).toHaveValue('Ilon Mask')
        //generic assertion
        const inputValue = await usernameFileld.inputValue();
        expect(inputValue).toEqual('Ilon Mask');
    });
