class LoginPage
{

    constructor(page)
    {

        this.page=page
        this.username = page.getByPlaceholder('email@example.com')
        this.password = page.locator('#userPassword')
        this.loginbtn = page.getByRole('button',{name:'Login'})
        this.homepageidentifier = page.locator('//h3[normalize-space()="Automation"]')
        this.errormessage = page.locator('#toast-container')

    }

    async launchurl(){
       await  this.page.goto('https://rahulshettyacademy.com/client')
    }

    async validlogin(username,password){
       await  this.username.fill(username)
       await  this.password.fill(password)
       await this.loginbtn.click()
      //  await this.homepageidentifier.waitFor()

    }

    async invalidlogin(username,password){
        await  this.username.fill(username)
        await  this.password.fill(password)
        await this.loginbtn.click()
        await this.errormessage.waitFor()
 
     }
}


module.exports = {LoginPage}