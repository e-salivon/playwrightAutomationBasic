import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/webtables");
});

test.describe('Web table test suite', () => {

  test('Edit row', async ({ page }) => {
    // Локатор для кнопки редактирования третьей записи
    const editButton = page.locator('#edit-record-3');

    // Нажимаем на кнопку редактирования
    await editButton.click();
    const modal = page.locator('.modal-content')
    await modal.waitFor({state: 'visible'})
    const firstName = await page.locator('#firstName')
    firstName.click()
    firstName.clear()
    firstName.fill('Anna')
    const Submit = page.getByRole('button', {name: "Submit"})
    Submit.click()
    const thirdRow = page.locator('.ReactTable .rt-tbody .rt-tr-group').nth(2);
    const nameCell = thirdRow.locator('.rt-td').nth(0);
    await expect(nameCell).toHaveText('Anna');

  });

});

//const targetRow = page.getByRole('row', {name: "someText@inTheRow.com"}) another way to find a row
// tagetRow.locator('#some_id').click() find some element in the row