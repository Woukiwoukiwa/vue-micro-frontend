import 'shims-logger.d.ts';
import 'shims-vue.d.ts';
import 'shims-window.d.ts';
import Vue, { VueConstructor } from 'vue';
import VMicroFrontend from './VMicroFrontend';

window.Vue = Vue;

export default {
    install(vue: VueConstructor<Vue>) {
        vue.component('v-micro-frontend', VMicroFrontend);
    },
};
