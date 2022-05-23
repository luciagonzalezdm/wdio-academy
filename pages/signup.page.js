import BasePage from "./base.page";

class SignUpPage extends BasePage {

    get emailAddressField () { 
        return $('#email_create'); 
    }

    get createAccountBtn () { 
        return $('#SubmitCreate'); 
    }

        /* PERSONAL INFORMATION */

    get maleGenderChk () { 
        return $('#id_gender1'); 
    }

    get femaleGenderChk () { 
        return $('#id_gender2'); 
    }

    get ctmFirstName () { 
        return $('#customer_firstname'); 
    }

    get ctmLastName () { 
        return $('#customer_lastname'); 
    }
    
    get passwordField () { 
        return $('#passwd'); 
    }

    /* ADDRESS INFORMATION */

    get companyNameField () { 
        return $('[id="company"]'); 
    }
    
    get addressField () { 
        return $('[id="address1"]'); 
    }

    get cityField () { 
        return $('[id="city"]'); 
    }

    get stateCmb () { 
        return $('[id="id_state"]'); 
    }
    
    get postalCodeField () { 
        return $('[id="postcode"]'); 
    }

    get countryCmb () { 
        return $('[id="id_country"]'); 
    }

    get mobilePhoneField () { 
        return $('[id="phone_mobile"]'); 
    }
    
    get registerBtn () { 
        return $('[id="submitAccount"]'); 
    }

        /* METHODS */

    async completeEmailAddress(emailAddress) {
        emailAddress = await this.generateRandomEmailAddress();
        await super.completeFieldWithText(this.emailAddressField, emailAddress);
    }

    async clickCreateBtn() {
        await super.clickElement(this.createAccountBtn);
    }
    
  /**
   * Complete all the fields of the signup form
   * @param {Object} account from data file
   */
    async signUpForm(account) {
        await this.selectGenderBtn(account.gender);
        await this.completeFirstName(account.firstName);
        await this.completeLastName(account.lastName);
        await this.completePassword(account.password);
        
        await this.completeCompanyName(account.companyName)
        await this.completeAddress(account.address);
        await this.completeCity(account.city);
        await this.completeState(account.state);
        await this.completePostalCode(account.postalCode);
        await this.completeMobilePhone(account.mobilePhone);
        await this.clickRegisterBtn();
    }

    async completeFirstName(firstName) {
        await this.completeFieldWithText(this.ctmFirstName, firstName);
    }
    
    async completeLastName(lastName) {
        await this.completeFieldWithText(this.ctmLastName, lastName);
    }

    async selectGenderBtn(gender) {
        await this.clickElement(
          gender == "id_gender1"
            ? this.maleGenderChk
            : this.femaleGenderChk
        );
    }

    async completePassword(password) {
        await super.completeFieldWithText(this.passwordField, password);
    }

    async completeCompanyName(companyName) {
        await super.completeFieldWithText(this.companyNameField, companyName);
    }

    async completeAddress(address) {
        await super.completeFieldWithText(this.addressField, address);
    }
    
    async completeCity(city) {
        await super.completeFieldWithText(this.cityField, city);
    }
    
    async completeState(state) {
        await this.stateCmb.selectByVisibleText(state);
    }
    
    async completePostalCode(postalCode) {
        await super.completeFieldWithText(this.postalCodeField, postalCode);
    }

    async completeMobilePhone(mobilePhone) {
        await super.completeFieldWithText(this.mobilePhoneField, mobilePhone);
    }

    async clickRegisterBtn() {
        await super.clickElement(this.registerBtn);
    }

    async generateRandomEmailAddress() {
        let characters = "abcdefghijklmnopqrstuvwxyz";
        let username = "";
        for (let i = 0; i < 10; i++)
          username += characters[Math.floor(Math.random() * characters.length)];
        return (username += "@demo.io");
    }
    

}
export default new SignUpPage();