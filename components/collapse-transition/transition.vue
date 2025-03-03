<template>
  <transition v-on="on">
    <slot />
  </transition>
</template>

<script>
import { defineComponent } from 'vue';
import { inlineStyle } from '../../utils/dom';

export default defineComponent({
  name: 'zCollapseTransition',
  props: {
    duration: {
      type: Number,
      default: 0.5,
    },
    animate: {
      type: String,
      default: 'ease',
    }
  },
  setup(props) {
    const getStyle = (obj) => {
      if (obj.currentStyle) {
        return obj.currentStyle;
      }
      return obj.currentStyle || getComputedStyle(obj);
    }
    const transition = (config) => {
      const style = {
        transition: `all ${config.duration}s ${config.animate}`,
        overflow: 'hidden',
      };
      return {
        beforeEnter(el) {
          el.dataset.paddingTop = getStyle(el).paddingTop; // el.style.paddingTop
          el.dataset.paddingBottom = getStyle(el).paddingBottom; // el.style.paddingBottom
          inlineStyle(
            el,
            Object.assign(style, { height: 0 }),
          );
        },
        enter(el) {
          setTimeout(() => {
            inlineStyle(el, {
              height: `${el.scrollHeight}px`,
              paddingTop: el.dataset.paddingTop,
              paddingBottom: el.dataset.paddingBottom,
            });
          }, 0);
        },
        afterEnter(el) {
          inlineStyle(el, { height: '', overflow: '' });
        },
        beforeLeave(el) {
          inlineStyle(el, Object.assign(style, {
            height: `${el.scrollHeight}px`,
            overflow: '',
          }));
        },
        leave(el) {
          setTimeout(() => {
            inlineStyle(el, { height: 0, overflow: 'hidden' });
          }, 0);
        },
        afterLeave(el) {
          inlineStyle(el, { height: 0, overflow: 'hidden' });
        },
      };
    }
    return {
      on: transition(props)
    }
  }
})
</script>
