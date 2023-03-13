<template>
  <!-- 组件开发中 还未完善 -->
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';

export default {
  name: 'scroll',
  props: {
    // 有时候我们需要知道滚动的位置。
    // 1：会非实时（屏幕滑动超过一定时间后）派发scroll事件；
    // 2：会在屏幕滑动的过程中实时的派发scroll事件；
    // 3：不仅在屏幕滑动的过程中，而且在momentum滚动动画运行过程中实时派发scroll事件；不设置则默认为0，即不派发scroll事件。
    probeType: {
      type: Number,
      default: 1
    },
    // 是否手动派发点击事件，better-scroll默认会阻止浏览器的原生click事件。
    // true：better-scroll会派发一个click事件。
    click: {
      type: Boolean,
      default: true
    },
    // 是否监听滚动
    listenScroll: {
      type: Boolean,
      default: false
    },
    // 用于滚动的列表数据
    data: {
      type: Array,
      default: null
    },
    // 滚动前的钩子
    beforeScroll: {
      type: Boolean,
      default: false
    },
    // 刷新前的延迟时间，单位：毫秒
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  // 在mounted钩子中初始化scroll
  mounted() {
    // 延迟20毫秒是用于抵消浏览器的刷新耗时（一般17毫秒），确保DOM已经渲染
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      // 初始化better-scroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      });
      // 如果需要监听滚动，则向上派发scroll事件
      if (this.listenScroll) {
        let that = this;
        this.scroll.on('scroll', (pos) => {
          that.$emit('scroll', pos);
        });
      }
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll');
        });
      }
    },
    // 以下是对一些better-scroll方法的代理
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  // 设置一个监听器，如果data发生变化，就需要重新计算scroll的高度，即调用refresh()方法
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>
 