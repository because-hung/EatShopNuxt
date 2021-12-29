<template>
  <div>
    <component :is="type" @changeValue="changeValue" />
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
    changeValue (emitValue) {
      console.log('value', emitValue)
      this.$emit('changeValue', emitValue)
    }
  }
}
</script>
