import Vue from 'vue';
import { Module } from 'vuex';

export interface MicroFrontendDescriptor {
    name: string;
    url: string;
}

export interface VueMicroFrontend {
    component: Vue;
    store: {
        namespace: string;
        module: Module<any, any>,
    };
}