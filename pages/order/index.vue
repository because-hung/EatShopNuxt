<template>
  <div class="container">
    <div class="product">
    <h2 class="title center">主餐</h2>
    <div class="productCard">
     <ul v-for="(item, i) in food"
     :key="i"
     class="food">
      <img :src="item.img" alt="" class="productImg">
       <li class="product-title">{{item.name}}</li>
       <div class="price">
        <li>price: <span class="strong"> {{item.price}}</span></li>
        <li><span>數量: <input type="number" v-model="item.num" class="number"></span></li>
    </div>
     </ul>
     </div>
          </div>
        <div class="sauce">
        <h2 class="title center">口味</h2>
        <ul class="taste">
          <li v-for="(item, i) in sauce" :key="i" >
            <input type="radio" name="taste" :value="item"  v-model="order.sauce">
            {{item}}
            </li>
        </ul>
      <div>
        <div class="spicyTaste center">
             <h2 class="title">辣度:</h2>
        <select name="spicy" v-model="order.spicy" class="spicyInput">
          <option>不辣</option>
          <option>小辣</option>
          <option>中辣</option>
          <option>大辣</option>
        </select>
        </div>
      </div>
        </div>
     <div class="orderList">
       <div class="personal">
        <h1>你的大名</h1>
        <input type="text" v-model="order.name">
        <h2>地址</h2>
        <input type="text" v-model="order.address">
        <div class="btn">
        <button @click="getRandom">送出</button>
        </div>
       </div>
       <div class="info">
          <List
     :name="order.name"
     :address="order.address"
     :sauce="order.sauce"
     :spicy="order.spicy"
     :total="total"
       ></List>
    <!-- <h3>總共:{{total}}</h3> -->
    </div>

     </div>
     <div class="customer">
    <h2 class="title center">訂購名單</h2>
     <ul v-for="(item, i) in deta"
     :key="i">
       <li>Name:{{item.name}} --- 居住地: {{item.city}}</li>
     </ul>
     </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      data: [],
      deta: [],
      order: [{
        name: '',
        address: '',
        product: '',
        sauce: '',
        spicy: '',
        num: 0
      }],
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
      ],
      sauce: [
        '梅粉',
        '九層塔',
        '番茄醬',
        '胡椒'
      ]
    }
  },
  methods: {
    async getData () {
      try {
        const res = await this.$axios.get(
          'https://mocki.io/v1/40e08d2b-6fc1-43e2-bbcf-eb5a09115f06'
        )
        console.log(res)
        this.data = res.data
        this.deta = [...this.data]
        console.log(this.data)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    getRandom () {
      this.deta.push({
        name: this.order.name,
        city: this.order.address
      })
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
  }
}
</script>
<style lang="scss" scoped>
*{
  font-size: 20px;
}
.container{
  width: 1440px;
  margin: 0 auto;
  background-image: url(@/assets/Background06.jpg);
  background-size: cover;
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
  ul{
    padding: 20px;
    margin: 20px;
     box-shadow: 5px 5px;
     background: white;
    li {
      margin-top: 5px;
      margin-bottom: 5px;
       display: flex;
        justify-content: center;
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
display: flex;
justify-content: center;
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
.taste{
  display: flex;
  justify-content: center;
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
  background-size: cover;
  background-position: center;
  color:white;
  .personal .btn{
    text-align: right;
    margin-top: 30px;
  }
}
.customer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul{
      margin-left: 50px;
    }
    }
</style>
