import { expect } from "playwright/test";
import { BasePage} from "./BasePage";

export class LoginPage extends BasePage {
    readonly page: any
    readonly email: any;
    readonly password: any;
    readonly loginBtn: any;
    readonly errorMessage: any;

        constructor(page){
          super(page)
        this.page = page
        this.email = page.locator('//input[@name="session_key"]');
        this.password = page.locator('//input[@name="session_password"]');
        this.loginBtn = page.locator('//button[@class="btn__primary--large from__button--floating"]');
        this.errorMessage = page.locator('//*[@id="error-for-username"]');
        
      }
    
      async doLogin(email="alesya1602gmail.com",pass = "111"){
        await this.page.goto("https://www.linkedin.com/login");
        await this.email.fill(email);
        await this.password.pressSequentially(pass);
        await this.loginBtn.click();
        await expect(this.errorMessage).toHaveText("Please enter a valid username");
        };
      }
    