import HomePage from './HomePagev2.spec.js';
import {expect} from '@playwright/test';
import {test} from 'node:test';
import  assert from 'node:assert';
import { chromium } from '@playwright/test';

let LoginData = [
    {
        email:"alesya1602@gmail.com",
        pass:"",
        result:"Please enter a password.",
        locator:'//div[@id="error-for-password"]'
    },
    {
        email:"alesya1602gmail.com",
        pass:"123456",
        result:"Please enter a valid username",
        locator:'//*[@id="error-for-username"]'
    },
    {
        email:"",
        pass:"123456",
        result:"Please enter an email address or phone number",
        locator:'//*[@id="error-for-username"]'
    },
];

LoginData.forEach(({email,pass,result,locator})=>{
    test("Login Data", async()=>{
      const browser = await chromium.launch({headless:false});
      const page = await browser.newPage();
      let homePage = new HomePage(page);
      await homePage.doLogin(email,pass,result,locator);
      await page.close();
      await browser.close();
    });
});