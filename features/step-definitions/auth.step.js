import {Given, Then} from "@wdio/cucumber-framework";
import {authPage} from "../pageobjects/auth.page";
import {homePage} from "../pageobjects/home.page";
import {dynamicData, staticData} from "../utils/Utils";
import faker from "faker";
import allureReporter from '@wdio/allure-reporter'

Then(/^create an account with random username$/, async()=>{
    console.log("account creation ");
    allureReporter.addStep("create an account with random username");

    const randomStr = Math.random().toString(36).substr(2, 5);
    const emailId = `myemail_${randomStr}@gmail.com`;

    allureReporter.addSeverity("critical")
    const addressObj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        company: faker.company.companyName(),
        address1: faker.address.streetAddress(),
        address2: faker.random.alphaNumeric(5),
    }
    dynamicData.email = emailId;
    dynamicData.address = addressObj;
    await authPage.createAccount(emailId, addressObj);
})

Given(/^I am on the Sign In Page$/, async () => {

    if (await homePage.btnSignOut.isExisting()) {
        await authPage.signOut();
    }

    await expect(homePage.btnSignIn).toBeDisplayed();
    await expect(homePage.img_Logo).toBeDisplayed();
    await expect(homePage.link_Contact).toBeDisplayed();

    await homePage.navigateToLoginPage();
});

Given(/^Login using newly created (dynamic|static) credentials$/, async (credentialType) => {

    let email = "";
    if (credentialType === "dynamic") {
        email = dynamicData.email;
        console.log("dynamicData.email " + dynamicData.email);
    } else {
        email = staticData.email;
    }
    await authPage.signIn(email);
    allureReporter.addSeverity("minor")
});