import HomePage from './HomePage.spec.js';
import {expect} from '@playwright/test';
import {test} from 'node:test';
import  assert from 'node:assert';
import { chromium } from 'playwright';

let LoginData = [
    {
        email:"alesya1602@gmail.com",
        pass:"123456",
        result:"Ви ввели невірну адресу електронної пошти або пароль",
        locator:'//p[@class="page-login__actions-validation ng-star-inserted"]'
    },
    {
        email:"alesya1602gmail.com",
        pass:"123456",
        result:"Неправильна адреса електронної пошти",
        locator:'//p[@class="validation-messages__item ng-star-inserted"]'
    },
    {
        email:"",
        pass:"123456",
        result:"Неправильна адреса електронної пошти",
        locator:'//p[@class="validation-messages__item ng-star-inserted"]'
    },
];

LoginData.forEach(({email,pass,result,locator})=>{
  test("Login Data", async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    let homePage = new HomePage(page);
    await homePage.doLogin(email,pass,result,locator);
    //await this.email.fill(email);
    //await this.password.pressSequentially(pass);
    //await this.submitBtn.click();
    //expect(this.page.locator(locator)).toHaveText(result);
    });
  });
  