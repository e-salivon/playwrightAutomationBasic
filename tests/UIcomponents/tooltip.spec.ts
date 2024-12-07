import { test, expect } from '@playwright/test';


test.beforeEach( 'locators', async ({page}) => {
    await page.goto('https://demoqa.com/tool-tips');   
    });

    test('Tooltip text', async ({page}) =>{
        const button = page.locator('#toolTipButton');
        await button.hover();
        const tooltip = await page.locator('[area-describedby ="buttonToolTip"]').textContent();
        expect(tooltip).toEqual('You hovered over the Button')

    })