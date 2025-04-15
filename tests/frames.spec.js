// const {test,ecpect} = require('@playwright/test')

// test.only('frame handling in pw', async ({page})=>{
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
//     const framepage = page .frameLocator('#courses-iframe')
//     await  framepage.getByRole('link',{name:'All Access plan'}).first().click()
//     await  framepage.locator('.text h2').waitFor()
//     // const result=await  framepage.locator('.text h2').isVisible()
//     await expect(framepage.locator('.text h2')).toBeVisible();

//      await page.getByRole('link',{name:'Home'}).click()
//      await page.waitForTimeout(5000)
// })

import { test, expect } from '@playwright/test';

test('handle iframe and verify element visibility', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Get the iframe using frameLocator
  const framepage = page.frameLocator('#courses-iframe'); // Replace with actual iframe selector

  // Click the "All Access Plan" link inside the iframe
  await framepage.getByRole('link', { name: 'All Access plan' }).first().click();

  // ✅ Correct way to check visibility using `expect()`
  await expect(framepage.locator('.text h2')).toBeVisible();

  // Click on "Home" link outside the iframe
  await page.getByRole('link', { name: 'Home' }).click();

  // Wait for 5 seconds (for debugging, not recommended in actual tests)
  await page.waitForTimeout(5000);
});
