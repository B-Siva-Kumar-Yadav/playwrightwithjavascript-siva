const {test,expect} = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')
const { DashboardPage } = require('../pageObjects/DashboardPage')

let  loginpage
let  dashboardpage

 
const useremail ='kumarsivab22@gmail.com'
const userpassword ='Siva12345'

 const  productname = "IPHONE 13 PRO"


test.beforeEach( async ({page}) =>{
    loginpage = new LoginPage(page)
    dashboardpage = new DashboardPage(page)
    await loginpage.launchurl()
    await loginpage.validlogin( useremail,userpassword)
})

test ('add a product to a cart ' , async ()=>{
    await  dashboardpage.searchandaddcart( productname)
    await expect(dashboardpage.addtocartconfirmation).toBeVisible("Product Added To Cart")
})