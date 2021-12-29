<template>
<div>
   <component :is="type" @changeValue="changeValue"></component>
</div>
</template>
<script>
export default {
  props: {
    type: {
      type: String
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
