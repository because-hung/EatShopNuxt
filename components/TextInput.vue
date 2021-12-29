<template>
<div>
     <div class="txt center">
        <h3>備註特殊需求</h3>
        <input type="text" v-model.trim="txt">
      </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      txt: ''
    }
  },
  watch: {
    txt (txt) {
      this.$emit('changeValue', txt)
      console.log(txt)
    }

  }
}
</script>
<style>
h3{
  margin-right: 8px;
}
</style>
