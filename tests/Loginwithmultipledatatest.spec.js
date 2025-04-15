const {test,expect} =require('@playwright/test')
 const {LoginPage} =require('../pageObjects/LoginPage')

//  const 

//  useremail ='kumarsivab22@gmail.com',
//  userpassword ='Siva12345'

// json => json string => js object 

const datas =JSON.parse(JSON.stringify(require("../utils/datadriven.json")))

 let loginpage
  for (const data of datas){
 test.beforeEach(async({page})=>{
    loginpage = new LoginPage(page) //  creating new pbject 
    await loginpage.launchurl(data.url)
   
 })
 
test(`check login with valid crendentials for  ${data.name}`, async () => {
    await loginpage.validlogin( data.username,data.userpassword)
    await expect(loginpage.homepageidentifier).toBeVisible()
    

})

test(`check login with invalid crendentials for  ${data.name}`, async () => {
    await loginpage.invalidlogin( data.username,data.invaliduserpassword)
    await expect(loginpage.errormessage).toHaveText(' Incorrect email or password. ')
  

})
}

