<template>
    <content-body>
        <div class="row">
            <div class="col-xl-5 col-lg-5 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="buy-sell-widget">
                            <b-tabs>
                                <b-tab title="Buy"><currency-form /></b-tab>
                                <b-tab title="Sell"><currency-form /></b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </div>
                <p class="p-4">
                    Note: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Modi cupiditate suscipit explicabo voluptas eos in
                    tenetur error temporibus dolorum. Nulla!
                </p>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="buyer-seller">
                            <div class="d-flex justify-content-between mb-3">
                                <div class="buyer-info">
                                    <div class="media">
                                        <img
                                            class="mr-3"
                                            src="/images/profile/2.png"
                                            alt=""
                                            width="50"
                                        />
                                        <div class="media-body">
                                            <h4>Buyer</h4>
                                            <h5>BTC_LORD</h5>
                                            <a href="#">name@domain.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="seller-info text-right">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4>Seller</h4>
                                            <h5>John Doe</h5>
                                            <a href="#">name@domain.com</a>
                                        </div>
                                        <img
                                            class="ml-3"
                                            src="/images/profile/1.png"
                                            alt=""
                                            width="50"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span class="text-primary"
                                                    >You are selling</span
                                                >
                                            </td>
                                            <td>
                                                <span class="text-primary"
                                                    >0.00254 BTC</span
                                                >
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Payment Method</td>
                                            <td>
                                                Bank of America Bank
                                                ***********5245
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Exchange Rate</td>
                                            <td>0.00212455 BTC</td>
                                        </tr>
                                        <tr>
                                            <td>Fee</td>
                                            <td>$28.00 USD</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>$854.00 USD</td>
                                        </tr>
                                        <tr>
                                            <td>Vat</td>
                                            <td>
                                                <div class="text-danger">
                                                    $25.00 USD
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sub Total</td>
                                            <td>$1232.00 USD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6 col-xxl-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">FAQ</h4>
                    </div>
                    <div class="card-body">
                        <div id="accordion-faq" class="accordion">
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" role="tab">
                                    <h5
                                        class="mb-0 c-pointer"
                                        v-b-toggle.accordion-1
                                    >
                                        When Should I Release My Cryptocurrency
                                        During a Trade?
                                    </h5>
                                </b-card-header>
                                <b-collapse
                                    id="accordion-1"
                                    visible
                                    accordion="my-accordion"
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        As a seller, releasing the
                                        cryptocurrency you’re selling should be
                                        the last step of your trade. You should
                                        only release the crypto after you’ve
                                        confirmed a successful payment from the
                                        buyer. If you release the crypto before
                                        confirming you’ve received a successful
                                        payment, you can start a dispute and our
                                        moderators will help sort out the issue.
                                        For more information on how to start a
                                        dispute, take a look at this article.
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" role="tab">
                                    <h5
                                        class="mb-0 c-pointer"
                                        v-b-toggle.accordion-2
                                    >
                                        Why should I verify my account?
                                    </h5>
                                </b-card-header>
                                <b-collapse
                                    id="accordion-2"
                                    accordion="my-accordion"
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        With each new level of verification,
                                        here’s a glimpse of what you’ll unlock:
                                        <br />
                                        <h3>Level 1 :</h3>
                                        <ul>
                                            <li>
                                                Increased security on your
                                                account.
                                            </li>
                                            <li>
                                                Ability to trade and send more
                                                crypto.
                                                <br />
                                            </li>

                                            <h3>Level 2 :</h3>
                                            <li>
                                                Increased trade and send out
                                                limits.
                                            </li>
                                            <li>
                                                Access to more payment methods.
                                            </li>
                                            <li>
                                                Ability to create your own
                                                offers.
                                            </li>
                                            <li>
                                                Ability to convert
                                                cryptocurrency. <br />
                                            </li>
                                            <h3>Level 3 :</h3>
                                            <li>
                                                Increased trade and send out
                                                limits.
                                            </li>
                                            <li>
                                                Removal of 0.002 BTC requirement
                                                for your offers to be visible in
                                                the marketplace.
                                            </li>
                                            <li>
                                                Increased trade and send out
                                                limits.
                                            </li>
                                        </ul>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" role="tab">
                                    <h5
                                        class="mb-0 c-pointer"
                                        v-b-toggle.accordion-3
                                    >
                                        Why Didn’t My Account Pass Compliance
                                        Review?
                                    </h5>
                                </b-card-header>
                                <b-collapse
                                    id="accordion-3"
                                    accordion="my-accordion"
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        Anim pariatur cliche reprehenderit, enim
                                        eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard dolor
                                        brunch. Food truck quinoa nesciunt
                                        laborum eiusmod.
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" role="tab">
                                    <h5
                                        class="mb-0 c-pointer"
                                        v-b-toggle.accordion-4
                                    >
                                        What Countries Require ID Verification?
                                    </h5>
                                </b-card-header>
                                <b-collapse
                                    id="accordion-4"
                                    accordion="my-accordion"
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        Anim pariatur cliche reprehenderit, enim
                                        eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard dolor
                                        brunch. Food truck quinoa nesciunt
                                        laborum eiusmod.
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" role="tab">
                                    <h5
                                        class="mb-0 c-pointer"
                                        v-b-toggle.accordion-5
                                    >
                                        I Sent Funds to the Wrong Address. How
                                        Do I Get Them Back?
                                    </h5>
                                </b-card-header>
                                <b-collapse
                                    id="accordion-5"
                                    accordion="my-accordion"
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        Anim pariatur cliche reprehenderit, enim
                                        eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard dolor
                                        brunch. Food truck quinoa nesciunt
                                        laborum eiusmod.
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </content-body>
</template>

<script>
import contentBody from "@app/components/dashboard/ContentBody.vue";
import currencyForm from "@app/components/CurrencyForm.vue";
import app from "@app/App.vue";

export default {
    extends: app,
    components: { currencyForm, contentBody },
};
</script>