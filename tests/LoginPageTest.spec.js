// const {test,expect} =require('@playwright/test')
//  const {LoginPage} =require('../pageObjects/LoginPage')

//  const 

//  username ='kumarsivab22@gmail.com',
//  userpassword ='Siva12345',
//  invaliduserpassword = "kumar123"

//  let loginpage

//  test.beforeEach(async({page})=>{
//     loginpage = new LoginPage(page) //  creating new pbject 

//     await loginpage.launchurl()
//     await page. waitForTimeout(5000)
//  })
// test('check login with valid crendentials', async () => {


   
//     await loginpage.validlogin( username,userpassword)
//     await expect(loginpage.homepageidentifier).toBeVisible()
    

// })

// test('check login with invalid crendentials', async () => {

//     await loginpage.invalidlogin( username,invaliduserpassword)
//     await expect(loginpage.errormessage).toHaveText(' Incorrect email or password. ')
  

// })

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');

const username = 'kumarsivab22@gmail.com';
const userpassword = 'Siva12345';
const invaliduserpassword = 'kumar123';

let loginpage;

test.beforeEach(async ({ page }) => {
  loginpage = new LoginPage(page); // Creating new object
  await loginpage.launchurl();
  await page.waitForTimeout(5000); // Optional, but usually not needed if you're using proper wait
});

test('check login with valid credentials', async () => {
  await loginpage.validlogin(username, userpassword);
  await expect(loginpage.homepageidentifier).toBeVisible();
});

test('check login with invalid credentials', async () => {
  await loginpage.invalidlogin(username, invaliduserpassword);
  await expect(loginpage.errormessage).toHaveText('Incorrect email or password.');
});
