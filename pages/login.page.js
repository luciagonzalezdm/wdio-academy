import BasePage from "./base.page";

class LoginPage extends BasePage {

    get myAccountAccess() {
        return $('[href$="my-account"]');
    }

    get pageTitle() {
        return $('[class="page-heading"]');
    }

    get emailField() {
        return $('#email');
    }

    get passwordField() {
        return $('[id="passwd"]');
    }

    get signInBtn() {
        return $('[id="SubmitLogin"]');
    }

    get loginErrorMsg() {
        return $('[class="alert alert-danger"]');
    }

    get welcomeMsg() {
        return $('.info-account');
    }

    async accountAccess() {
        await super.clickElement(await this.myAccountAccess);
    }

    /**
     * Completes email and password fields and logs in
     * @param {String} email to fill email field
     * @param {String} password to fill password field
     */
    async logInAs(email, password) {
        await this.completeCredentials(email, password);
        await this.clickSignInBtn();
    }

    async clickSignInBtn() {
        await super.clickElement(await this.signInBtn);
    }

    /**
     * Completes email and password fields
     * @param {String} email to fill email field
     * @param {String} password to fill password field
     */
    async completeCredentials(email, password) {
        await super.completeFieldWithText(await this.emailField, email);
        await super.completeFieldWithText(await this.passwordField, password);
    }

}

export default new LoginPage();