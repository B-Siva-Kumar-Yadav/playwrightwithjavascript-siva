const {test,expect} =require('@playwright/test')

const productname ='IPHONE 13 PRO'

test('place order and validate it ' , async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/client')
    await page.getByPlaceholder('email@example.com').fill('kumarsivab22@gmail.com')
    await page.locator('#userPassword').fill('Siva12345')
    await page.getByRole('button',{name:'Login'}).click()
    await expect( page.getByRole('button',{name:'Home'})).toBeVisible()
    const products = await page.locator('div .card-body')
    //allTextContents() - this is the method which is returning the text value from multiple elememts 
    const producttexts = await products.locator('b').allTextContents()
    await console.log(producttexts)
   const count= await products.count()
// await page.waitForTimeout(5000)
for(let i=0; i<count; i++){
const producttext=await products.nth(i).locator('b').textContent()
   if( producttext === productname){
    await products.nth(i).getByRole('button',{name:' Add To Cart'}).click()
    break;
   }
 }

 await expect(page.locator('#toast-container')).toBeVisible()
 await page .locator("[routerlink='/dashboard/cart']").click()
 await expect(page.getByText('My Cart')).toBeVisible()
 await page.getByRole('button',{name:'Checkout'}).click()
 // pressSequentially () - which is used to type charctrer by charcter in the input field // maximum its ius used dynamis drop down 
  await page.getByPlaceholder('Select Country').pressSequentially('ind')
  const dropdownvalues = page .locator('.ta-results button')
  await dropdownvalues.first().waitFor()
  const countdropdownvalues= await dropdownvalues.count()

  for(let i=0; i<countdropdownvalues; i++){
    const dropdowntext= await dropdownvalues.nth(i).textContent()
    if(dropdowntext === " India"){
       await  dropdownvalues.nth(i).click()
        break;
    }
  }
   
  await page.getByText("Place Order").click()
  await expect(page.locator('#toast-container')).toBeVisible()
  await expect(page.locator('.hero-primary')).toHaveAttribute('class','hero-primary')
  const orderID = await page.locator('.em-spacer-1 .ng-star-inserted')
  console.log(orderID)
  await page.locator("[routerlink='/dashboard/myorders']").first().click()
  await page.locator("tbody").waitFor()
  const rows = page.locator("tbody tr")
  const rowscount = await rows.count()
  for(let i=0; i<rowscount; i++){
    const orderIDtext = await rows.nth(i).locator("th").textContent()
    if( orderID.includes(orderIDtext)){
        await rows.nth(i).locator("button").first().click()
        break;
    }
  }
  const ordersummaryorderID = await page .locator ("div.col-text").textContent()
  expect ( orderID.includes(ordersummaryorderID)).toBeTruthy()

 await page.waitForTimeout(5000)
})