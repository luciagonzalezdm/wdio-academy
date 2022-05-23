import BasePage from "./base.page";

class LogoutPage extends BasePage {

    get logoutBtn() {
        return $('.logout');
    }

    async clickLogout() {
        await super.clickElement(this.logoutBtn);
    }

}

export default new LogoutPage();