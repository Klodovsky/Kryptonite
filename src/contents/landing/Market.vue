<template>
    <div class="section-padding page-section" id="market">
        <div class="container">
            <div class="row py-lg-5 justify-content-center">
                <div class="col-xl-7">
                    <div class="section_heading">
                        <span>Explore</span>
                        <h3>The World's Leading Cryptocurrency Exchange</h3>
                        <p>
                            Trade Bitcoin, ETH, and hundreds of other
                            cryptocurrencies in minutes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <section class="section">
            <table
                class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
            >
                <thead>
                    <tr class="is-selected">
                        <th>#</th>
                        <th>Name</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                        <th>Volume (24h)</th>
                        <th>Circulating Supply</th>
                        <th>Open (24h)</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(value, key, index) in coins">
                        <th>{{ index + 1 }}</th>
                        <td>{{ key }}</td>
                        <td>{{ value.USD.MKTCAP }}</td>
                        <td>{{ value.USD.PRICE }}</td>
                        <td>{{ value.USD.VOLUME24HOUR }}</td>
                        <td>{{ value.USD.SUPPLY }}</td>
                        <td>{{ value.USD.OPEN24HOUR }}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "home",
    data: () => ({
        coins: [],
        errors: [],
        cryptos: [],
    }),
    created() {
        axios
            .get(
                "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,USDT,ADA&tsyms=USD,EUR"
            )
            .then((response) => {
                this.coins = response.data.DISPLAY;
                this.cryptos = response.data.DISPLAY;
                console.log(response);
            })
            .catch((e) => {
                this.errors.push(e);
            });
    },
};
</script>

<style>
body {
    background: #001f3f;
}

div#crypto-container {
    background: white;
    width: 70%;
    margin: 0 auto 4px auto;
    padding: 1em;
    box-shadow: 1px 1px 0 lightgrey;
}

span.left {
    font-weight: bold;
}

span.right {
    float: right;
}
section.section {
    width: 70%;
}
section.section {
    margin: auto;
}
table {
    border-collapse: collapse;
    width: 100%;
}
th,
td {
    padding: 0.25rem;
    text-align: left;
    border: 1px solid #ccc;
}
tbody tr:hover {
    background: rgb(28, 28, 167);
}
</style>