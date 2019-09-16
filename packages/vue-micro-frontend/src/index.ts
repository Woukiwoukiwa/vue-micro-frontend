/// <reference path="shims-logger.d.ts" />
/// <reference path="shims-vue.d.ts" />
/// <reference path="shims-window.d.ts" />
import Vue, { VueConstructor } from 'vue';
import VMicroFrontend from './VMicroFrontend';

window.Vue = Vue;

export default {
    install(vue: VueConstructor<Vue>) {
        vue.component('v-micro-frontend', VMicroFrontend);
    },
};
