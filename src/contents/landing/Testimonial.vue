<template>
    <div class="section-padding" id="testimonial">
        <div class="container">
            <div class="row py-lg-5 justify-content-center">
                <div class="col-xl-7">
                    <div class="section_heading">
                        <h2>Customer Reviews</h2>
                        <h5>
                            Millions have already successfully used Kryptonite
                            and they have had a lot of nice things to say about
                            us. Here's what our users think about Kryptonite, in
                            their own words.
                        </h5>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-8 col-md-11">
                    <div class="testimonial-content">
                        <carousel
                            :per-page="1"
                            :loop="true"
                            :navigation-enabled="true"
                            :pagination-enabled="false"
                            navigation-prev-label="<i class='la la-arrow-left'></i>"
                            navigation-next-label="<i class='la la-arrow-right'></i>"
                        >
                            <slide>
                                <div class="row align-items-center">
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-img">
                                            <img
                                                class="img-fluid"
                                                src="/images/BTC_USER.PNG"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-review">
                                            <img
                                                class="img-fluid"
                                                src="/images/BTC_USER.PNG"
                                                alt=""
                                            />
                                            <p>
                                                Being a Kryptonite vendor has
                                                been great. Support is always
                                                responsive and helpful, and best
                                                of all I've been able to help
                                                many new Bitcoin users get some
                                                of their first Bitcoin. It's
                                                always rewarding to be the first
                                                on-ramp to the currency of the
                                                future.
                                            </p>
                                            <div class="customer-info">
                                                <h5>Mr_Coins</h5>
                                                <p>Bitcoin Vendor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="row align-items-center">
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-img">
                                            <img
                                                class="img-fluid"
                                                src="/images/testimonial/2.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-review">
                                            <img
                                                class="img-fluid"
                                                src="/images/brand/3.webp"
                                                alt=""
                                            />
                                            <p>
                                                Kryptonite is my first Bitcoin
                                                experience. Started as your
                                                regular newbie first time BTC
                                                buyer - asking legacy traders
                                                what is a wallet and why I need
                                                to follow verification steps.
                                                Sold over 400+ Bitcoin to date
                                                and helped over 800 newbies like
                                                myself to dive in to this new
                                                currency.
                                            </p>
                                            <div class="customer-info">
                                                <h5>BTC_LORD_666</h5>
                                                <p>Bitcoin vendor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    components: { Carousel, Slide },
};
</script>