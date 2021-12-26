<template>
  <div>
    <h2 class="title">
      你的訂購資訊
    </h2>
    <ul>
      <li>姓名: <strong>{{ name }}</strong></li>
      <li>地址: <strong> {{ address }} </strong></li>
      <li>口味: <strong> {{ sauce }} </strong></li>
      <li>辣度: <strong> {{ spicy }} </strong></li>
      <h3>總共: <strong>{{ total }}</strong></h3>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    sauce: {
      type: String,
      default: ''
    },
    spicy: {
      type: String,
      default: ''
    },
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss">
ul{
  padding-left: 0px;
  padding-right: 65px;
    li{
        margin-top: 8px;
        margin-bottom: 8px;
        list-style-type: none;
        strong{
          font-size: 24px;
          margin-left: 5px;
          }
      }
}
</style>
