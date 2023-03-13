<template>
    <van-button type="primary" />
    <van-button type="primary" />
    <el-button>我是 ElButton</el-button>
    <scrollbar></scrollbar>
    <autocomplete></autocomplete>
    <div>
        <checkbox></checkbox>
    </div>
    <DatePicker></DatePicker>
    <dialog></dialog>
    <div>

        <MessageBox></MessageBox>
    </div>
    <div>
        Message
        <Message></Message>
    </div>
    <Dropdown></Dropdown>
    <popconfirm></popconfirm>
    <div>
        drawer
        <drawer></drawer>
    </div>
    <div>
        Popover
        <Popover></Popover>
    </div>
    <div>
        Loading
        <Loading></Loading>
    </div>
    <Statistic></Statistic>
    <VTable></VTable>
</template>

<script>

export default {
    name: 'MyComponent',
};
</script>

<style scoped></style>