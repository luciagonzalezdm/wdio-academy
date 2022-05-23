import { validAccount } from "../data/accounts";
import LoginPage from "../pages/login.page";
import CartPage from "../pages/cart.page";

describe("Check out", () => {
    beforeEach(async function () {
        await LoginPage.open("");
        await LoginPage.accountAccess();
        await LoginPage.logInAs(
            validAccount.email,
            validAccount.password
        );
        await CartPage.goToHomePage();
    });
    it('should buy a product with wire transfer payment method when checkout button is pressed', async () => {
        
        await CartPage.clickAddToCart();
        await expect(CartPage.addedProductMsg).toHaveTextContaining('Product successfully added to your shopping cart');
        await CartPage.makeAnOrderWithWire();
        await expect(CartPage.orderConfirmationMsg).toHaveTextContaining('Your order on My Store is complete.');
    });
});
