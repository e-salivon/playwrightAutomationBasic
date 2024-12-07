
import { test, expect } from '@playwright/test';

// Scenarios:
// 1. Default dropdown value
// 2. All dropdown options
// 3. Select all options from the dropwown 

//recommended approach is to use 
//page.getByRole('List') OR page.getByRole('Listitem') if the DOM has UL or UI tags
//in the test app there is no such tags, so just regular page.locator used

test.beforeEach( 'locators', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByText('Dropdown').click();

    });

test.describe('Dropdown verification', () =>{

    test('Default dropdown value', async ({page}) =>{
        const dropdownText = await page.locator('[selected="selected"]').textContent()
        expect(dropdownText).toEqual('Please select an option')

    })

    test('All dropdown options', async({page}) =>{
        const optionsList = await page.locator('option')
        expect(optionsList).toHaveText(["Please select an option", "Option 1", "Option 2"])
    })


    test('Select dropdown options', async({page}) =>{
        const dropdown = page.locator("#dropdown")
        const options = await dropdown.locator('option').all() //add all options into array
        for (const option of options){
            const optionText = await option.textContent();
            await dropdown.selectOption(optionText); //selecting an option from the array in the dropdown
            const selectedText = await dropdown.locator('[selected="selected"]').textContent(); //check what option is selected
            expect(selectedText).toBe(optionText);
          
        }
        


    })

})
    