import Vue from 'vue';
import 'zingchart/es6';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
import zingchartVue from 'zingchart-vue';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.component('zingchart', zingchartVue)

import routes from './routes';
import app from './App.vue';

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

const main = new Vue({
    el: '#app',
    components: { app },

    render: function(createElement) {
        return createElement(app);
    },

    router
});