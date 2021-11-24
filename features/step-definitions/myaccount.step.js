import { Given } from "@wdio/cucumber-framework";
import {myAccount} from "../pageobjects/myaccount.page";

Given(
    /^I shall verify the address information in my addresses section$/,
    async () => {
        await myAccount.navigateToAddress();
    }
);