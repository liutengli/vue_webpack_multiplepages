<template>
  <div id="app">
    <div class="oilBuy">
      <header class="oil_title">
        <span @click="backHandle">
          <van-icon name="arrow-left" />
          <i>返回</i>
        </span>
        <h3>油品采购</h3>
      </header>
      <section>
        <article class="todayPrice">
          <h3>
            <i></i>
            <span>今日报价</span>
          </h3>
        </article>
        <article class="oilList">
          <p>
            <em class="oilTitle">油品</em>
            <em class="priceTitle">
              价格
              <i>元/吨</i>
            </em>
            <em class="miduTitle">
              密度
              <i>kg/m^3</i>
            </em>
            <em class="zhangfuTitle">涨幅</em>
          </p>
          <ul>
            <li v-for="item in oilPriceList" :key="item.id">
              <dl>
                <dt>{{item.name}}</dt>
                <dd>{{item.refineryName}}</dd>
              </dl>
              <i class="priceList">{{item.price}}</i>
              <i class="midu">{{item.gain}}</i>
              <i class="zhangfu">{{item.density}}</i>
            </li>
          </ul>
        </article>
      </section>
      <van-popup v-model="show">
        <div class="customerService">
          <h3>温馨提示</h3>
          <p>
            油品采购可直接与平台客服联系，联系方式：
            <a href="tel:40012312313213">40012312313213</a>
          </p>
          <van-button type="default" @click="hidePopup">确认</van-button>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
import {oilPriceList} from './http/api'
import { Button,Popup  } from "vant"
export default {
  data () {
    return {
      show: false,
      oilPriceList:[]
    }
  },
  created () {
    let html = document.querySelector('html')
    html.addEventListener('click',(e)=>{
      this.show = true
    },true)
  },
  mounted() {
    this.getData()
	},
  methods: {
    getData(){
     oilPriceList({
        success:(res)=>{
          this.oilPriceList=res.data.rows
        },
        err:(err)=>{
          this.$message(err)
        }
      })
    },
    backHandle () {
      this.$router.back()
    },
     hidePopup () {
       this.show = false
    }
  }
}
</script>

<style scoped lang="scss">
.oilBuy {
  display: flex;
  flex-direction: column;
  flex-wrap: 1;
}
.oil_title {
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 1.2rem;
  background: #ff812d;
  span {
    display: flex;
    justify-content: center;
    font-size: 0.35rem;
    color: #fff;
    vertical-align: middle;
    margin-left: 0.5rem;
    .van-icon-arrow-left {
      font-size: 0.45rem;
    }
  }
  h3 {
    font-size: 0.4rem;
    color: #fff;
    display: inline-block;
    margin-left: 28%;
  }
}
.todayPrice {
  width: 100%;
  margin-top: 0.2rem;
  h3 {
    width: 100%;
    height: 0.6rem;
    padding: 0.2rem 0;
    i {
      display: inline-block;
      width: 0.2rem;
      height: 0.5rem;
      background: #ff812d;
      border-radius: 0.08rem;
      margin: 0 0.08rem 0 0.5rem;
      float: left;
    }
    span {
      font-size: 0.36rem;
      float: left;
    }
  }
}
.oilList {
  p {
    font-size: 0.28rem;
    font-weight: 700;
    color: #3d3d3d;
    display: flex;
    margin: 0.3rem 0;
    em i {
      font-size: 0.24rem;
      font-weight: 400;
      color: #a0a0a0;
    }
    .oilTitle {
      width: 36%;
      text-align: center;
    }
    .priceTitle {
      width: 22%;
    }
    .miduTitle {
      width: 21%;
    }
    .zhangfuTitle {
      width: 21%;
    }
  }
  li {
    width: 100%;
    display: flex;
    align-items: center;
    border-top: 0.03rem solid #f9f9f9;
    padding: 0.2rem 0;
    dl {
      width: 36%;
    }
    dt,
    dd {
      margin-left: 0.3rem;
      font-size: 0.28rem;
      color: #000;
    }
    dd {
      font-size: 0.22rem;
      color: #b1b1b1;
      margin-top: 0.1rem;
    }
    .priceList {
      width: 22%;
      font-size: 0.4rem;
      color: #f13052;
    }
    .midu {
      width: 21%;
      font-size: 0.3rem;
      color: #009900;
    }
    .zhangfu {
      width: 21%;
      font-size: 0.3rem;
      color: #51b093;
    }
  }
}
.van-popup {
  width: 60%;
  border-radius: 0.25rem;
  .customerService {
    height: 4rem;
    padding: 0 0.3rem;
    h3 {
      font-size: 0.4rem;
      color: #000;
      margin: 0.4rem 0 0.5rem 0;
    }
    p {
      font-size: 0.25rem;
      color: #000;
      a {
        display: block;
        font-size: 0.34rem;
        font-weight: 700;
        margin-top: 0.18rem;
        margin-bottom: 0.6rem;
      }
    }
    .van-button {
      width: 1.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      padding: 0;
      border: 0.02rem solid #000;
      font-size: 0.3rem;
      color: #000;
    }
  }
}
</style>
