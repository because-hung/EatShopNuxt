<template>
    <div>
         <div class="spicyTaste center">
             <h3 class="title">辣度:</h3>
        <select
        name="spicy"
        class="spicyInput"
        @change="changeValue($event)">
          <option v-for="(item, i) in spicy"
        :key="i"
         :value="item">{{item}}</option>
        </select>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      spicy: ['不辣', '小辣', '中辣', '大辣']
    }
  },
  methods: {
    changeValue (event) {
      this.$emit('changeValue', event.target.value)
    }
  }
}

</script>
<style>
h3{
  margin-right: 8px;
}
</style>
