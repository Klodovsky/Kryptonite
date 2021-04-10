<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="card profile_card">
                        <div class="card-body">
                            <div class="media">
                                <img
                                    class="mr-3 rounded-circle mr-0 mr-sm-3"
                                    src="/images/profile/2.png"
                                    width="60"
                                    height="60"
                                    alt=""
                                />
                                <div class="media-body">
                                    <span>Hello</span>
                                    <h4 class="mb-2">John Doe</h4>
                                    <p class="mb-1">
                                        <span
                                            ><i
                                                class="fa fa-phone mr-2 text-primary"
                                            ></i
                                        ></span>
                                        +1 235 5547
                                    </p>
                                    <p class="mb-1">
                                        <span
                                            ><i
                                                class="fa fa-envelope mr-2 text-primary"
                                            ></i
                                        ></span>
                                        name@domain.com
                                    </p>
                                </div>
                            </div>

                            <ul class="card-profile__info">
                                <li>
                                    <h5 class="mr-4">Address</h5>
                                    <span class="text-muted"
                                        >1700 Richards Avenue, Stockton,
                                        California</span
                                    >
                                </li>
                                <li class="mb-1">
                                    <h5 class="mr-4">Total Log</h5>
                                    <span>103 Time (Today 5 Times)</span>
                                </li>
                                <li>
                                    <h5 class="text-danger mr-4">Last Log</h5>
                                    <span class="text-danger"
                                        >8 April, 2021, 10:00 PM</span
                                    >
                                </li>
                            </ul>
                            <div class="social-icons">
                                <a
                                    class="facebook text-center"
                                    href="javascript:void(0)"
                                    ><span><i class="fa fa-facebook"></i></span
                                ></a>
                                <a
                                    class="twitter text-center"
                                    href="javascript:void(0)"
                                    ><span><i class="fa fa-twitter"></i></span
                                ></a>
                                <a
                                    class="youtube text-center"
                                    href="javascript:void(0)"
                                    ><span><i class="fa fa-youtube"></i></span
                                ></a>
                                <a
                                    class="googlePlus text-center"
                                    href="javascript:void(0)"
                                    ><span><i class="fa fa-google"></i></span
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="card acc_balance">
                        <div class="card-header">
                            <h4 class="card-title">Wallet</h4>
                        </div>
                        <div class="card-body">
                            <span>Available BTC</span>
                            <h3>0.0230145 BTC</h3>

                            <div class="d-flex justify-content-between my-4">
                                <div>
                                    <p class="mb-1">Bought this month</p>
                                    <h4>1.029 BTC</h4>
                                </div>
                                <div>
                                    <p class="mb-1">Sold this month</p>
                                    <h4>0.098 BTC</h4>
                                </div>
                            </div>

                            <div class="btn-group mb-3">
                                <button class="btn btn-primary">Sell</button>
                                <button class="btn btn-success">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Withdraw</h4>
                        </div>
                        <div class="card-body">
                            <form action="">
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text"
                                                ><i class="fa fa-money"></i
                                            ></label>
                                        </div>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="5000 USD"
                                        />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text"
                                                ><i class="fa fa-bank"></i
                                            ></label>
                                        </div>
                                        <select class="form-control">
                                            <option>
                                                JPMorgan Chase ********45845
                                            </option>
                                            <option>
                                                Credit Card ***********5458
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <button class="btn btn-primary btn-block">
                                    Withdraw Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header border-0">
                            <h4 class="card-title">All Activities</h4>
                        </div>
                        <div class="card-body pt-0">
                            <div class="transaction-table">
                                <div class="table-responsive">
                                    <table
                                        class="table mb-0 table-responsive-sm"
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span class="sold-thumb"
                                                        ><i
                                                            class="la la-arrow-down"
                                                        ></i
                                                    ></span>
                                                </td>

                                                <td>
                                                    <span
                                                        class="badge badge-danger"
                                                        >Sold</span
                                                    >
                                                </td>
                                                <td>
                                                    <i class="cc BTC"></i> BTC
                                                </td>
                                                <td>Using - Bitcoin wallet</td>
                                                <td class="text-danger">
                                                    -0.000242 BTC
                                                </td>
                                                <td>+250 $</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="buy-thumb"
                                                        ><i
                                                            class="la la-arrow-up"
                                                        ></i
                                                    ></span>
                                                </td>
                                                <td>
                                                    <span
                                                        class="badge badge-success"
                                                        >Bought</span
                                                    >
                                                </td>
                                                <td>
                                                    <i class="cc LTC"></i> LTC
                                                </td>
                                                <td>
                                                    Using - Card ending in
                                                    *******8405
                                                </td>
                                                <td class="text-success">
                                                    +0.000242 BTC
                                                </td>
                                                <td>-155.78 $</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="sold-thumb"
                                                        ><i
                                                            class="la la-arrow-down"
                                                        ></i
                                                    ></span>
                                                </td>
                                                <td>
                                                    <span
                                                        class="badge badge-danger"
                                                        >Sold</span
                                                    >
                                                </td>
                                                <td>
                                                    <i class="cc XRP"></i> XRP
                                                </td>
                                                <td>Using - Ripple wallet</td>
                                                <td class="text-danger">
                                                    -55.9 XRP
                                                </td>
                                                <td>+66.125 $</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="buy-thumb"
                                                        ><i
                                                            class="la la-arrow-up"
                                                        ></i
                                                    ></span>
                                                </td>
                                                <td>
                                                    <span
                                                        class="badge badge-success"
                                                        >Bought</span
                                                    >
                                                </td>
                                                <td>
                                                    <i class="cc DASH"></i> DASH
                                                </td>
                                                <td>
                                                    Using - Bank savings ending
                                                    in ********6300
                                                </td>
                                                <td class="text-success">
                                                    +543.87 DASH
                                                </td>
                                                <td>-641.33 $</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="sold-thumb"
                                                        ><i
                                                            class="la la-arrow-down"
                                                        ></i
                                                    ></span>
                                                </td>
                                                <td>
                                                    <span
                                                        class="badge badge-danger"
                                                        >Sold</span
                                                    >
                                                </td>
                                                <td>
                                                    <i class="cc BTC"></i> BTC
                                                </td>
                                                <td>Using - Bitcoin wallet</td>
                                                <td class="text-danger">
                                                    -0.0077 BTC
                                                </td>
                                                <td>+602.55 $</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>