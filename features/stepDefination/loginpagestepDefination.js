const { Given,When,Then, setDefaultTimeout } =require ("@cucumber/cucumber")

setDefaultTimeout(60*1000)

const {expect} = require('@playwright/test')

const {LoginPage} = require('../../pageObjects/LoginPage')

const playwright = require('@playwright/test')

 const url ='https://rahulshettyacademy.com/client'



Given(`I am on the login page`,async () => {
    const browser = await playwright.chromium.launch()
     const context = await browser.newContext()
     this.page = await context.newPage()
     this.pageLogin = await new LoginPage(this.page)
    await  this.pageLogin.launchurl(url)

});

When(`I entered username as {string} and as password {string}`, async (username,password) =>{
    await this.pageLogin.validlogin(username,password)
});

Then(`I should see the dadhboard page`,async () => {
   await expect (this.pageLogin.homepageidentifier).toBeVisible()
});