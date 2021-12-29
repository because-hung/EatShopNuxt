<template>
  <div>
    <div class="txt center">
      <h3>特殊需求</h3>
      <input
        v-model.trim="txt"
        type="text"
      >
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
<style lang="scss">
.txt{
  margin-top: 10px;
  h3{
    margin-right: 8px;
  }
}
</style>
