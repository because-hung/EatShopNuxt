<template clientOnly>
  <div class="containerIndex index-border">
    <div class="banner" />
    <div class="page">
      <div class="font">
        <h2 class="title">
          Merry Christmas
        </h2>
        <p class="description">
          聖誕佳節還不知道要吃甚麼嗎?
        </p>
        <p class="description">
          來點好吃的鹹酥雞吧
        </p>
      </div>
      <div class="btn">
        <nuxt-link to="./order" class="link">
          點我查看產品
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  created () {
    this.getColor()
  },
  methods: {
    getColor () {
      if (typeof document !== 'undefined') {
        const body = document.getElementsByTagName('body')[0]
        if (this.$nuxt.$route.name === 'index') {
          body.classList.add('changeIndexColor')
        }
      }
    }
  }
}
</script>
<style lang="scss">
.changeIndexColor{
  background-color: $bgColorOne;
}
.containerIndex{
  margin-left: 15%;
  margin-right: 15%;
}
.banner{
  z-index: 0;
  background-image: url(@/assets/index02.jpg);
  @include ImgCoverCenter;
  height: 500px;
}
.page{
  position: relative;
  z-index: 10;
  top: -30px;
  background-image: url(@/assets/index04.jpg);
  @include ImgCoverCenter;
  margin-left: 3%;
  margin-right: 3%;
  height: 500px;
  border-radius: 50px;
  }
  .font{
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  .title{
    margin-top: 4%;
    font-size: 72px;
    color: red;
    background: white;
    padding: 8px;
  }
  .description{
    font-size: 36px;
  }
}
.link{
  font-size: 24px;
  display: flex;
  justify-content: end;
  color:yellow;
  margin-right: 14%;
}
</style>
