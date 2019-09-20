import Vue from 'vue';
import { Module } from 'vuex';

export interface VueMicroFrontend {
    component: Vue;
    store: {
        namespace: string;
        module: Module<any, any>;
    };
}
