<template>
  <div>
    <component :is="type" @changeValue="changeValue" /> <!-- componets 用is 去動態切換 -->
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeValue (emitValue) { // emit 傳值
      console.log('value', emitValue)
      this.$emit('changeValue', emitValue)
    }
  }
}
</script>
