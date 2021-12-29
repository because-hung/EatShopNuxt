<template>
  <div class="container order-border">
    <div class="product">
      <h2 class="title center">
        主餐
      </h2>
      <div class="productCard">
        <ul
          v-for="(item, i) in food"
          :key="i"
          class="food"
        >
          <img :src="item.img" alt="" class="productImg">
          <li class="product-title">
            {{ item.name }}
          </li>
          <div class="price">
            <li>price: <span class="strong"> {{ item.price }}</span></li>
            <li>
              <span>數量:
                <input
                  v-model="item.num"
                  type="number"
                  class="number"
                >
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="taste">
      <h2 class="title center">
        口味
      </h2>
      <div class="btn-group center">
        <button class="btn" @click="changeType('RadioInput')">
          口味
        </button>
        <button class="btn" @click="changeType('SelectInput')">
          辣度
        </button>
        <button class="btn" @click="changeType('TextInput')">
          備註
        </button>
      </div>
      <AllInput
        :type="type"
        class="InputComponet"
        @changeValue="changeValue"
      />
    </div>
    <div class="orderList">
      <div class="personal">
        <h1>你的大名</h1>
        <input
          v-model="name"
          type="text"
        >
        <h2>地址</h2>
        <input
          v-model="address"
          type="text"
        >
        <div class="btn">
          <button @click="getOrderNum">
            送出
          </button>
        </div>
      </div>
      <div class="info">
        <h2 class="title">
          你的訂購資訊
        </h2>
        <ul>
          <li>姓名: <strong>{{ name }}</strong></li>
          <li>地址: <strong> {{ address }} </strong></li>
          <li>口味: <strong> {{ allValue }} </strong></li>
          <h3>總共: <strong>{{ total }}</strong></h3>
        </ul>
      </div>
    </div>
    <div class="customer">
      <h2 class="title center">
        訂購名單
      </h2>
      <ul
        v-for="(item, i) in orderData"
        :key="i"
      >
        <li>Name:{{ item.name }} --- 居住地: {{ item.city }} <span v-if="item.num">--- 訂單編號: {{ item.num }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OrderPage',
  data () {
    return {
      data: [],
      orderData: [],
      allValue: '',
      value1: '',
      value2: '',
      value3: '',
      name: '',
      address: '',
      orderNum: 1,
      type: 'radioType',
      food: [
        {
          name: '薯條',
          price: 50,
          num: 0,
          img: require('@/assets/product01.jpg')
        },
        {
          name: '鹹酥雞',
          price: 50,
          num: 0,
          img: require('@/assets/product02.jpg')
        },
        {
          name: '甜不辣',
          price: 40,
          num: 0,
          img: require('@/assets/product03.jpg')
        },
        {
          name: '雞排',
          price: 60,
          num: 0,
          img: require('@/assets/product04.jpg')
        }
      ]
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'eat order description'
        }
      ]
    }
  },
  computed: {
    total () {
      let sum = 0
      for (const i in this.food) {
        let add = 0
        add = this.food[i].price * this.food[i].num
        sum = sum + add
      }
      return sum
    }
  },
  created () {
    this.getData()
    this.getColor()
  },
  methods: {
    async getData () {
      try {
        const res = await this.$axios.get(
          'https://mocki.io/v1/40e08d2b-6fc1-43e2-bbcf-eb5a09115f06'
        )
        console.log(res)
        this.data = res.data
        this.orderData = [...this.data]
        console.log(this.data)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    getOrderNum () {
      // 新增訂購名單 新增訂單編號
      this.orderData.push({
        name: this.name,
        city: this.address,
        num: this.orderNum
      })
      this.orderNum++
    },
    getColor () {
      if (typeof document !== 'undefined') {
        const body = document.getElementsByTagName('body')[0]
        if (this.$nuxt.$route.name === 'order') {
          body.classList.add('changeOrderColor')
        }
      }
    },
    changeType (type) {
      this.type = type
      console.log(this.type)
    },
    changeValue (value) {
      if (value.includes('辣')) {
        this.value2 = value
      } else if (value.includes('*')) {
        this.value1 = value
      } else {
        this.value3 = value
      }
      this.allValue = `${this.value1} , ${this.value2} , ${this.value3}`
      console.log('value', this.value)
    }
  }
}
</script>
<style lang="scss">

*{
  font-size: 20px;
}
.changeOrderColor{
  background-color: $bgColorTwo;
}
.container{
  max-width: 1440px;
  margin: 0 auto;
  background-image: url(@/assets/Background06.jpg);
  background-size: cover;
  padding-bottom: 30px;
}
.product{
   padding-top: 3px;
}
.productCard{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 300px);
  gap: 20px;
  background-image: url(@/assets/background03.jpg);
  border: 2px solid palevioletred;
  @include pad{
    grid-template-columns: repeat(2, 1fr);
  }
  @include phone{
    grid-template-columns: repeat(1, 1fr);
  }
  ul{
    padding: 20px;
    margin: 20px;
     box-shadow: 5px 5px;
     background: white;
    li {
      margin-top: 5px;
      margin-bottom: 5px;
      @include center;
        font-weight: 700;
      .strong{
        font-size: 24px;
        font-weight: 700;
        color: red;
        margin-left: 2px;
      }
    }
  }
  .productImg{
      width: 200px;
      height: 200px;
  }
}
.center{
  @include center;
  font-size: 36px;
}
.price{
  display: flex;
  justify-content: space-evenly;
}
.number{
  width: 25px;
}
li{
  list-style-type: none;
}
.InputComponet{
  background: lightcoral;
  padding: 15px;
}
.btn-group{
@include center;
  .btn{
    margin: 5px;
    width: 150px;
    height: 50px;
    border-radius: 100px;
  }
  @include phone{
    grid-template-columns: repeat(2, 2fr);
  }
}
.orderList{
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
  border:5px red solid;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  background-image: url(@/assets/background02.jpg);
  @include ImgCoverCenter;
  color:white;
  .personal .btn{
    text-align: right;
    margin-top: 30px;
  }
  @include pad{
  flex-direction: column;
  align-items: center;
  }
  @include pad{
    margin: 0;
    background-position:right;
  }
}
.customer{
  margin-left: 10px;
  margin-right: 10px;
@include center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  ul{
    @include pad{
  background: lightcoral;
      padding-left: 0px;
      padding: 8px;
  }
  }
}
.info{
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
  @include pad{
  align-self: start;
  margin-left: 25%;
  }
}
</style>
