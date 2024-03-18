import { expect } from "playwright/test";

export class PasswordPage {
    forgotPass: any;
    forgotHeader: any;

        constructor(page){
        this.forgotPass = page.locator('//*[@class="btn__tertiary--medium forgot-password"]');
        this.forgotHeader = page.locator('//*[@class="header__content__heading"]');
      }
    
      async checkPasswordForgotPage(){
        await this.forgotPass.click();
        await expect(this.forgotHeader).toHaveText("Forgot password");
        };
      }
    