const {test,expect} = require('@playwright/test')

test("Login into the application ", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('//input[@name="username"]').fill("rahulshettyacademy")
    await page.locator('//input[@name="password"]').fill("learning")
    await page.locator('input[name="signin"]').click()
    // isVisible()- elelment is visible in the appication or not 
    // await page.locator('//a[normalize-space()="ProtoCommerce Home"]').waitFor()
    // const homepage=await page.locator('//a[normalize-space()="ProtoCommerce Home"]').isVisible()
    await expect(await page.locator('//a[normalize-space()="ProtoCommerce Home"]')).toBeTruthy()
    await page.waitForTimeout(5000)


})

test('check box,radia button and drop down', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.locator("[name='name']").first().fill("boyini siva kumar yadav")
    await page.locator("[name='email']").fill("siav@gmail.com")
    await page.locator("#exampleInputPassword1").fill('siva123')
    // check() - whis is used to check or click thr radio button
    await page.locator("#exampleCheck1").check()
    await page.locator("#inlineRadio1").check()
    // selectOption()- which is used to select the value from the static dropdown  
    await page.locator("#exampleFormControlSelect1").selectOption("Male")
    await page.waitForTimeout(5000)

})

// upload the file in playwright//

test('upload file',async({page})=>{
    await page.goto('https://qa-automation-practice.netlify.app/file-upload.html')
    // setInputFiles(path of the file )- this method is used to upload the file in app
    await page.locator('#file_upload').setInputFiles("C:\\Users\\HP\\Downloads\\Boyini siva kumar _resume (s) (2) (1).pdf")
    await page.locator('[type=submit]').click()

    await page.locator('#file_upload_response').waitFor()
    const response=await page.locator('#file_upload_response').isVisible()
    await expect(response).toBeTruthy()
    // await expect( page.locator('#file_upload_response')).toHaveText('You have successfully uploaded "Boyini siva kumar _resume (s) (2) (1).pdf"')
    await page.waitForTimeout(5000)
})

// mouse hover //

test.only('mose hover',async({page})=>{
    await page.goto('https://www.spicejet.com/')
    //hover()- which is used to to hover an element
    await page.locator('//div[contains(text(),"Add-ons")]').hover()
    await expect(page .locator('[data-testid="test-id-International Connection Baggage"]')).toBeVisible()
    await page.waitForTimeout(3000)
})