<template>
  <i class="iconfont neom-icon" :class="[name]" :style="[iconStyle_]" @click="handleClick" />
</template>

<script>
export default {
  name: "NeomIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
    // 颜色
    color: {
      type: [String, Boolean],
      default: "inherit",
    },
    useSvg: {
      type: [String, Boolean],
      default: true,
    },
    // icon 大小
    size: {
      type: [Number, String],
      default: 14,
    },
    // 偏转角度
    rotate: {
      type: [String, Boolean],
      default: false,
    },
    // 旋转
    spin: {
      type: Boolean,
      default: false,
    },
    spinSpeed: {
      type: [Number, String],
      default: 2,
    },
    customStyle: {
      type: [Object, Boolean],
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    // 偏转角度
    rotate_() {
      return String(this.rotate) !== "false" && this.rotate;
    },
    useSvg_() {
      return String(this.useSvg) !== "false";
    },
    iconStyle_() {
      const fontSize = this.addUnit(this.size);
      const styleObj = { fontSize, lineHeight: fontSize, width: fontSize, height: fontSize };
      String(this.color) !== "false" && (styleObj.color = this.color);
      // 组件动画
      this.rotate_ &&
        (styleObj.transform = isNaN(this.rotate)
          ? `rotate(${this.rotate})`
          : `rotate(${this.rotate}deg)`);
      this.spin &&
        (styleObj.animation = `neom-spin ${this.spinSpeed}s linear infinite`);
      return Object.assign(styleObj, this.customStyle);
    },
  },
  methods: {
    isNumeric(val) {
      return typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
    },
    unit(pixel) {
      return parseInt(pixel) / 75 + "rem";
    },
    addUnit(value, unit = "rem") {
      return this.isNumeric(value) ? this.unit(value) : String(value);
    },
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
<style>
@keyframes neom-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
<style lang="scss" scoped>
.neom-icon {
  position: relative;
  display: inline-block;
  font-size: inherit;
  text-rendering: auto;
  vertical-align: -0.15em;
  -webkit-font-smoothing: antialiased;
}
</style>
