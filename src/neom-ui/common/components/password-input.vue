<template>
  <div class="password-input">
    <div class="password-input-box">
      <input class="password-input-input" v-model="password" :maxlength="length" type="text" @focus="handleFocus()"
        @blur="handleBlur()" />
      <div class="password-input-item" v-for="i in length" :key="i">
        <div :class="{ 'password-input-item--active': password.length >= i }"></div>
        <div :class="{ 'password-input-item--line': isFocus && (password.length + 1 === i) }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    length: {
      type: Number,
      default: 6,
    },
  },
  // 方式一 你输入完密码外面校验完做了清空你里面就不会生效
  data() {
    return {
      isFocus: false,
    };
  },

  computed: {
    password: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    handleFocus() {
      this.isFocus = true;
    },
    handleBlur() {
      this.isFocus = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes flicker {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.password-input {
  &-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
  }

  &-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
  }

  &-item {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(240, 242, 245, 1);

    &--active {
      width: 16px;
      height: 16px;
      color: rgba(48, 49, 51, 100);
      background-color: #333;
      border-radius: 50%;
    }

    &--line {
      width: 2px;
      height: 50%;
      background-color: rgba(48, 49, 51, 100);
      animation: flicker 0.8s infinite;
    }
  }
}
</style>
