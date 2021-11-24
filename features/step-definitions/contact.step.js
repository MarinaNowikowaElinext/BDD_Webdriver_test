import {Given} from "@wdio/cucumber-framework";
import {homePage} from "../pageobjects/home.page";
import {commonPage} from "../pageobjects/common.page";
import {contactPage} from "../pageobjects/contact.page";

Given(/^I am on the contact page$/, async () => {
    await expect(homePage.link_Contact).toBePresent();
    await homePage.link_Contact.click();
    await commonPage.verifyPageHeading("CUSTOMER SERVICE - CONTACT US");
});

Given(/^I send refund request to customer care for prev. order$/, async () => {
    await contactPage.sendMessageToCustomerCare();



});