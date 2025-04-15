const {test,expect} =require('@playwright/test')
// screenshot 


// full page screen shot 
test('full page screen shot ' , async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client')
    await page.screenshot({path : "Fullpagescreenshot.png"})
})

// element specific screenshot 

test(' element specific screenshot ', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#login').screenshot({path : "logincreenshot1.png"})
})

// visual testing  

test.only('visual testing', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client') 
    await expect(await page .screenshot()).toMatchSnapshot('vishal.png')
})