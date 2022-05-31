import BasePage from "./base.page";

class CartPage extends BasePage {

    get storeLogo() {
        return $('[alt="My Store"]');
    }

    get product() {
        return $('[title="Faded Short Sleeve T-shirts"]');
    }

    get addToCartBtn() {
        return $('[id="add_to_cart"] button');
    }   

    get addedProductMsg() {
        return $('h2*=Product successfully added');
    }    
    
    get checkoutBtn() {
        return $('[class="btn btn-default button button-medium"]');
    }        

    get addressCheckoutBtn() {
        return $('[class="button btn btn-default standard-checkout button-medium"]');
    }

    get shippingCheckoutBtn() {
        return $('[class="button btn btn-default button-medium"]');
    }

    get agreeTermsChk() {
        return $('[class="checker"]');
    }
   
    get wirePaymentMethod() {
        return $('[title="Pay by bank wire"]');
    }  

    get checkPaymentMethod() {
        return $('[title="Pay by check."]');
    }  

    get orderConfirmationMsg() {
        return $('[class="cheque-indent"]');
    }

  /**
   * Click on store name and go to home page
   * 
   */
    async goToHomePage() {
        await super.clickElement(this.storeLogo);
    }

  /**
   * Click on produck and add it to cart
   * 
   */
    async clickAddToCart() {
        await super.clickElement(this.product);
        await super.clickElement(this.addToCartBtn);
    }

    async clickCheckout() {
        await super.clickElement(this.checkoutBtn);
    }

    async clickAddressCheckout() {
        await super.clickElement(this.addressCheckoutBtn);
    }

    async clickShippingCheckout() {
        await super.clickElement(this.shippingCheckoutBtn);
    }

    async clickAgreeTermsChk() {
        await super.clickElement(this.agreeTermsChk);
    }

    async clickWirePayment() {
        await super.clickElement(this.wirePaymentMethod);
    }

  /**
   * Completes the steps to make an order and pay with wire transfer
   * 
   */
    async makeAnOrderWithWire() {
        await this.clickCheckout();
        await this.clickAddressCheckout();
        await this.clickShippingCheckout();
        await this.clickAgreeTermsChk();
        await this.clickAddressCheckout();
        await this.clickWirePayment();
        await this.clickShippingCheckout();
    }

}

export default new CartPage();

