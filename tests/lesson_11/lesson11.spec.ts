import { test } from './fixture.ts';


test.describe ("e2e Test for Hillel",()=>{

    test("Forgot password", async({passwordPage})=>{
        await passwordPage.checkPasswordForgotPage()
    })
})
