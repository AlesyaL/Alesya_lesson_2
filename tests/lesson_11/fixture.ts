import { test as baseTest } from "@playwright/test";
import { LoginPage } from './pageObject/LoginPage';
import { PasswordPage } from "./pageObject/PasswordPage";

type basePage = {
  loginPage: LoginPage,
  passwordPage: PasswordPage
}

export const test = baseTest.extend<basePage>({
      passwordPage:async({page},use) => {
        let loginPage = new LoginPage(page)
        await loginPage.visit("https://www.linkedin.com/login")
        await loginPage.doLogin()
        let passwordPage = new PasswordPage(page)
        await use(passwordPage);
        await page.close();
    },
    
      loginPage: async ({page}, use) => {
        let loginPage = new LoginPage(page)
        await use(loginPage);
      },
})