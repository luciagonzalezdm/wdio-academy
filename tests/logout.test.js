import { validAccount } from "../data/accounts";
import LoginPage from "../pages/login.page";
import LogoutPage from "../pages/logout.page";

describe("Logout", () => {
    beforeEach(async function () {
        await LoginPage.open("");
        await LoginPage.accountAccess();
        await LoginPage.logInAs(
            validAccount.email,
            validAccount.password
        );
    });
    it("should log out when user click the logout button", async () => {
        await LogoutPage.clickLogout();
        await expect(LoginPage.pageTitle).toHaveTextContaining("AUTHENTICATION");
    });
});
