<template>
  <div class="detailBottomNav">
    <!-- <div class="leftBtn"><img src="../../../assets/img/detail/service.png">客服</div>
        <div class="leftBtn"><img src="../../../assets/img/detail/shop.png">店铺</div>
        <div class="leftBtn"><img src="../../../assets/img/detail/collect.png">收藏</div>
        <div class="rightBtn addCart" @click="addToCart">加入购物车</div>
        <div class="rightBtn buy">购买</div> -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button
        type="warning"
        @click="addToCart"
        text="加入购物车"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  name: 'detailBottomNav',
  methods: {
    addToCart() {
      this.$emit('addToCart')
    },
  },
}
</script>
<style scoped>
.detailBottomNav {
  display: flex;
  height: 55px;
  position: fixed;
  bottom: 0;
  z-index: 20;
  background: white;
  width: 100%;
}
.detailBottomNav > .leftBtn {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 15%;
  font-size: 12px;
}
.detailBottomNav > .leftBtn > img {
  width: 30%;
  display: block;
}
.detailBottomNav > .rightBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.addCart {
  background: chartreuse;
  width: 27%;
}
.buy {
  background: yellow;
  width: 27%;
}
</style>