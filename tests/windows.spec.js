// we have to launch a url 
// click on the link which will open the new tab 
// we have to move the focus to the new tab to do any actions on the newly tab/window
// again if we have to do some kind of action on the origanally openend page ,we have to move the focus from newly opened tab/window


// child window automation usnig playwright

const {test,expect} =require('@playwright/test')

test('child window handlimg ', async({page,context})=>{
    // when ever u will use page fixture it automatically create browser context and new page 

     await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
     const page1 = context.waitForEvent('page')
     await page.locator('[href*="documents-request"]').click() // page event and opened in new tab
     const newPage = await page1
     await newPage.getByRole('heading',{name:'Documents request'}).waitFor()
    const result = await newPage.getByRole('heading',{name:'Documents request'}).isVisible()
    expect(result).toBeTruthy()
    await page.locator('[name="username"]').fill('testing') // to move back to original page 
    await page.waitForTimeout(5000)
})

// we have another method to handle child window by using promise.all()

test('child window handling', async ({ page, context }) => {
    // Navigate to the website
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  
    // Click the link that opens a new tab while waiting for the new page event
    const [newPage1] = await Promise.all([
      context.waitForEvent('page'), // Wait for a new page to open
      page.locator('[href*="documents-request"]').click(), // Click the link to open the new page
    ]);
  
    
    await newPage1.getByRole('heading',{name:'Documents request'}).waitFor()
    const result = await newPage1.getByRole('heading',{name:'Documents request'}).isVisible()
    expect(result).toBeTruthy()
    await page.locator('[name="username"]').fill('testing') // to move back to original page 
    await page.waitForTimeout(5000)
})