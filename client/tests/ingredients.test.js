import { expect, test } from '@playwright/test'

test.beforeEach('go to ingredient page', async ({ page }) => {
  await page.goto('/ingredients')
})

test('ingredient content is available', async ({ page }) => {
  await expect(page.getByRole('heading')).toHaveText('Ingredients')
  await expect(
    page.getByTestId('ingredient-list').getByRole('listitem')
  ).toHaveCount(6)
})

test('filter function works', async ({ page }) => {
  await expect(
    page.getByTestId('ingredient-list').getByRole('listitem')
  ).toHaveText([
    'Campari',
    'gin',
    'lime juice',
    'rum',
    'simple syrup',
    'sweet vermouth'
  ])
  await page.getByLabel('filter').fill('vermouth')
  await expect(
    page.getByTestId('ingredient-list').getByRole('listitem')
  ).toHaveCount(1)
  await expect(
    page
      .getByTestId('recipe-list')
      .getByRole('listitem')
      .filter({ hasText: 'Campari' })
  ).toHaveCount(0)
})
