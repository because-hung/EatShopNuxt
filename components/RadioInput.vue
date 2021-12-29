<template>
  <div class="tasteCom">
    <ul
      v-for="(item, i) in sauce"
      :key="i"
    >
      <li>
        <input type="radio" name="taste" :value="item" @change="changeValue(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sauce: [
        '*梅粉',
        '*九層塔',
        '*番茄醬',
        '*胡椒'
      ]
    }
  },
  methods: {
    changeValue (value) {
      this.$emit('changeValue', value)
    }
  }
}
</script>
<style lang="scss">
.tasteCom{
@include center;
}
</style>
