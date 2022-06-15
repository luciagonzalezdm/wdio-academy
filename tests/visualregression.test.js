import LoginPage from "../pages/login.page";
import { expect } from 'chai';

describe("Visual regression", () => {
    it("should compare successful authentication page with baseline", async () => {
        await LoginPage.open("");
        await LoginPage.accountAccess();
        
        await LoginPage.pageTitle.waitForDisplayed();
        expect(await browser.checkElement(await LoginPage.pageTitle, 'authentication', {}), "Error: page title doesn't match with baseline").equal(0);
    });
});