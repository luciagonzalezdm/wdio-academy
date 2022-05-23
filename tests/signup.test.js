import {
  signUpAccountsSuccess,
  signUpAccountsError
} from "../data/accounts";
import LoginPage from "../pages/login.page";
import SignUpPage from "../pages/signup.page";
import LogoutPage from "../pages/logout.page";

describe("Sign up", () => {
  beforeEach(async function () {
    await LoginPage.open("");
    await LoginPage.accountAccess();
    await SignUpPage.completeEmailAddress();
    await SignUpPage.clickCreateBtn();
  });
  signUpAccountsSuccess.forEach((account) => {
    it(`should ${account.testSpecification} when register button is pressed`, async () => {
      await SignUpPage.signUpForm(account);
      await expect(LoginPage.welcomeMsg).toHaveText(account.returnMsg);
      await LogoutPage.clickLogout();
    });
  });
  signUpAccountsError.forEach((account) => {
    it(`should ${account.testSpecification} when register button is pressed`, async () => {
      await SignUpPage.signUpForm(account);
      await expect(LoginPage.loginErrorMsg).toHaveTextContaining(account.returnMsg);
    });
  });
});
