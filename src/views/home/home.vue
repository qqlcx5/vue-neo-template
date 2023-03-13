<template>
    <IconCircle size="88" color="#f00" />
    <van-button type="primary" />
    <van-button type="primary" />

    <el-button>我是 ElButton</el-button>
</template>

<script>
import IconCircle from '@/components/IconCircle.vue';

export default {
    name: 'MyComponent',
    components: {
        IconCircle
    }
};
</script>

<style scoped></style>