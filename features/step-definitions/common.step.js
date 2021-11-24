import {Given, When} from "@wdio/cucumber-framework";
import {commonPage} from "../pageobjects/common.page";
import {homePage} from "../pageobjects/home.page";

Given(/^I am on the home page$/, async () => {
    await commonPage.openHomePage();
    await expect(homePage.btnSignIn).toBePresent();
    await expect(homePage.img_Logo).toBePresent();
    await expect(homePage.link_Contact).toBePresent();
})

When(/^Navigate to SignUp page$/, async ()=>{
    await homePage.navigateToLoginPage();
    console.log("Navigated to Authentication page");
})