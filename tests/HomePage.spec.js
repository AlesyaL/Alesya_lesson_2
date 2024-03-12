import {expect} from '@playwright/test';
import {test} from 'node:test';
import  assert from 'node:assert';
import { chromium } from 'playwright';

export default class HomePage{
    constructor(page){
    this.page = page
    this.email = page.locator('//input[@type="email"]')
    this.password = page.locator('//input[@type="password"]')
    this.submitBtn = page.locator('//button')
  }

async doLogin(email,pass,result,locator){
    await this.page.goto("https://lms.ithillel.ua/");
    await this.email.fill(email);
    await this.password.pressSequentially(pass);
    await this.submitBtn.click();
    expect(this.page.locator(locator)).toHaveText(result);
    };
  }
