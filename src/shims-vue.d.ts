import Vue, { VueConstructor } from 'vue';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
