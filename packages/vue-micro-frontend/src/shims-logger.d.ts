import Vue, { VueConstructor } from 'vue';
declare module 'vue/types/vue' {
  interface VueConstructor {
    $log: {
      info(message: string, trace?: {}): void;
      warning(message: string, trace?: {}): void;
      error(message: string, trace?: {}): void;
    };
    Vue: VueConstructor<Vue>;
  }
}
