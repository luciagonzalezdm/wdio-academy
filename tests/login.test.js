import { validAccount, invalidAccount } from "../data/accounts";
import LoginPage from "../pages/login.page";
import LogoutPage from "../pages/logout.page";

describe("Login", () => {
    it("should log in with valid credentials when sign in button is pressed", async () => {
        await LoginPage.open("");
        await LoginPage.accountAccess();
        await LoginPage.logInAs(
            validAccount.email,
            validAccount.password
        );
        await expect(LoginPage.welcomeMsg).toExist();
        await LogoutPage.clickLogout();
    });

    it("should not login with invalid credentials when sign in button is pressed", async () => {
        await LoginPage.open("");
        await LoginPage.accountAccess();
        await LoginPage.logInAs(
            invalidAccount.email,
            invalidAccount.password
        );
        await expect(LoginPage.loginErrorMsg).toExist();
    });
});