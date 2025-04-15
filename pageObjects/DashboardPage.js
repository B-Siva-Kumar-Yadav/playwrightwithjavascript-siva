class DashboardPage {
    constructor (page){
         this.page = page 
         this.products = page.locator('div .card-body')
         this.addtocartbutton = page.getByRole('button',{name:' Add To Cart'})
         this.addtocartconfirmation = page.locator('#toast-container')
    }

    async searchandaddcart(productname){

  
   const count= await this.products.count()
// await page.waitForTimeout(5000)
for(let i=0; i<count; i++){
const producttext=await this.products.nth(i).locator('b').textContent()
   if( producttext === productname){
    await this.products.nth(i).locator('text=Add To Cart').click(); 
    break;
   }
 }
 await this.addtocartconfirmation.waitFor()
    }
}

module.exports = {DashboardPage }