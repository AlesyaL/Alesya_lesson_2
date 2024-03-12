import {expect} from '@playwright/test';
import {test} from 'node:test';
import  assert from 'node:assert';
import { chromium } from 'playwright';

export default class HomePage{
    constructor(page){
    //this.browser = chromium.launch({headless:false});
    //this.page = browser.newPage();
    //this.homePage = page.HomePage
    this.page = page;
    this.email = page.locator('//input[@name="session_key"]');
    this.password = page.locator('//input[@name="session_password"]');
    this.loginBtn = page.locator('//button[@class="btn__primary--large from__button--floating"]');
  }

  async doLogin(email,pass,result,locator){
    await this.page.goto("https://www.linkedin.com/login");
    await this.email.fill(email);
    await this.password.pressSequentially(pass);
    await this.loginBtn.click();
    expect(this.page.locator(locator)).toHaveText(result);
    };
  }
