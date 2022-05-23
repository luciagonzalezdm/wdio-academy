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

    get secondCheckoutBtn() {
        return $('[class="button btn btn-default standard-checkout button-medium"]');
    }

    get thirdCheckoutBtn() {
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

    async goToHomePage() {
        await super.clickElement(this.storeLogo);
    }

    async clickAddToCart() {
        await super.clickElement(this.product);
        await super.clickElement(this.addToCartBtn);
    }

    async clickCheckout1() {
        await super.clickElement(this.checkoutBtn);
    }

    async clickCheckout2() {
        await super.clickElement(this.secondCheckoutBtn);
    }

    async clickCheckout3() {
        await super.clickElement(this.thirdCheckoutBtn);
    }

    async clickAgreeTermsChk() {
        await super.clickElement(this.agreeTermsChk);
    }

    async clickWirePayment() {
        await super.clickElement(this.wirePaymentMethod);
    }

    async makeAnOrderWithWire() {
        await this.clickCheckout1();
        await this.clickCheckout2();
        await this.clickCheckout3();
        await this.clickAgreeTermsChk();
        await this.clickCheckout2();
        await this.clickWirePayment();
        await this.clickCheckout3();
    }

}

export default new CartPage();

