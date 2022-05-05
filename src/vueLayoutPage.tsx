import { useEventListener } from '@vueuse/core';
import { defineComponent, h, nextTick, onMounted, onUnmounted, ref, SetupContext, watchEffect } from 'vue-demi';
import './index.css';

export interface Options {
  hideHeaderPlaceholder?: boolean;
  hideFooterPlaceholder?: boolean;
  bodyBgColor?: string;
}
export default defineComponent({
  name: 'VueLayoutPage',
  props: {
    hideHeaderPlaceholder: {
      type: Boolean,
      default: false,
    },
    hideFooterPlaceholder: {
      type: Boolean,
      default: false,
    },
    bodyBgColor: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }: SetupContext) {
    // 编译之后用到该函数
    const createElement = h
    const header = ref();
    const main = ref();
    const footer = ref();
    const headerh = ref(0);
    const footerh = ref(0);
    const ev = window.onorientationchange ? 'orientationchange' : 'resize';

    watchEffect(()=>{
      document.body.style.backgroundColor = props.bodyBgColor;
    });

    const setHeaderHeight = () => {
      nextTick(() => {
        headerh.value = header.value?.offsetHeight || 0;
      });
    };

    const setFooterHeight = () => {
      nextTick(() => {
        footerh.value = footer.value?.offsetHeight || 0;
      });
    };

    const initPageLayout = () => {
      slots.footer ? setFooterHeight() : null;
      slots.header ? setHeaderHeight() : null;
    };

    onMounted(() => {
      initPageLayout();
    });

    onUnmounted(() => {
      document.body.style.backgroundColor='';
    })

    useEventListener(window, ev, () => {
      initPageLayout();
    });

    return () => (
      <div class="vue-layout-page">
        {slots.header ? (
          <header ref={header} class="layout-page-header">
            {slots.header?.()}
          </header>
        ) : null}

        {slots.header && !props.hideHeaderPlaceholder ? (
          <div style={{ height: headerh.value + 'px' }}></div>
        ) : null}

        {
          slots.default ? (
            <main ref={main} class="layout-page-main">
              {slots.default()}
            </main>
          ): null
        }

        {slots.footer && !props.hideFooterPlaceholder ? (
          <div style={{ height: footerh.value + 'px' }}></div>
        ) : null}

        {slots.footer ? (
          <footer ref={footer} class="layout-page-footer">
            {slots.footer?.()}
          </footer>
        ) : null}
      </div>
    );
  }
});
