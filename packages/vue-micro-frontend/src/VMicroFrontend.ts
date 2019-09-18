import Vue, { VueConstructor } from 'vue';
import 'vuex';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { MicroFrontendDescriptor } from '@vue-micro-frontend/types';

@Component({
  template: '<Component :is="dynamicComponent"/>',
})
export default class VMicroFrontend extends Vue {

  @Prop({ type: Object, default: () => ({}) })
  protected microFrontend!: MicroFrontendDescriptor;

  private dynamicComponent: VueConstructor<Vue> | null = null;

  @Watch('microFrontend', { immediate: true })
  protected async onMicroFrontendUpdate() {
    try {
      const component = await this.importComponent(this.microFrontend);
      this.dynamicComponent = component.default.component.default;
      if (component.default.store) {
        this.$store.registerModule([component.default.store.namespace], component.default.store.module);
      }
    } catch (error) {
      Vue.$log.error('Micro-frontend error', error);
    }
  }

  private async importComponent(descriptor: any): Promise<any> {
    const name: any = descriptor.name;
    const url: string = descriptor.url;
    if (window[name]) {
      return window[name];
    }

    window[name] = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.addEventListener('load', (param: any) => {
        resolve(window[name]);
      });
      script.addEventListener('error', () => {
        reject(new Error(`Error loading micro-frontend ${name} (${url})`));
      });
      script.async = true;
      script.src = url;
      document.head.appendChild(script);
    }) as any;
    return window[name];
  }
}
