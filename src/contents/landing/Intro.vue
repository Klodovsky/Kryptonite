<template>
    <div class="intro section-padding position-relative" id="intro">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-7 col-md-6">
                    <div class="intro-content">
                        <h2>Buy and sell <br />cryptocurrency</h2>
                        <p>
                            Buy and sell digital currencies using over 350
                            different payment methods. Get your Kryptonite
                            account to start accepting payments and sending
                            money with 5 million people just like you.
                        </p>
                        <div class="mt-4">
                            <a href="/sign-in" class="btn my-1 waves-effect"
                                >Buy
                                <!-- <img
                                    src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
                                    alt=""
                                /> !-->
                            </a>
                            <a href="/sign-in" class="btn my-1 waves-effect"
                                >Sell
                                <!-- <img src="/images/apple.svg" alt="" />!-->
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-md-6 py-md-5">
                    <div class="card">
                        <div class="card-body px-0">
                            <div class="buy-sell-widget">
                                <currency-form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import currencyForm from "@app/components/CurrencyForm.vue";

export default {
    components: { currencyForm },
};
</script>