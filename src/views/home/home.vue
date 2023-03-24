<template>
  <div>
    <div class="flex">
      <el-button>我是 ElButton</el-button>
      <van-button type="danger">危险按钮</van-button>
      <div class="small">44px</div>
      <div class="normal">88px</div>
    </div>
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
  </div>
</template>

<script>

export default {
  name: 'MyComponent',
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.small {
  width: 44px;
  height: 44px;
  background: #f22;
  font-size: 16px;
}

.normal {
  width: 88px;
  height: 88px;
  background: #ff45;
  font-size: 32px;
}
</style>