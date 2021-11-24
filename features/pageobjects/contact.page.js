import {staticData} from "../utils/Utils";

class ContactPage {
    get dropdownSubjectHeading() {
        return $("#id_contact");
    }

    get inputEmailAddress() {
        return $("#email");
    }

    get dropdownOrderReference() {
        return $(".selector span+select[name='id_order']");
    }

    get btnSubmit() {
        return $("#submitMessage");
    }

    get inputMessage() {
        return $("#message");
    }

    //Actions

    sendMessageToCustomerCare = async () => {
        await this.dropdownSubjectHeading.selectByVisibleText("Customer service");

        await expect(await this.inputEmailAddress.getValue()).toEqual(
            staticData.email
        );

        await this.dropdownOrderReference.selectByIndex(1);

        await this.inputMessage.setValue(
            "Hi There,\n" +
            "I got some issue with my product which i bought yesterday.Can you please help me with refund the amount!\n" +
            "Thanks"
        );

        await this.btnSubmit.click();
    };
}

export const contactPage = new ContactPage()
