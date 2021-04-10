<template>
  <div>
    <div class="item">
      <img src="~assets/img/profile/info.png" /><span>我的信息</span>
    </div>
    <div class="item">
      <img src="~assets/img/profile/integral.png" /><span>积分商城</span>
    </div>
    <div class="item">
      <img src="~assets/img/profile/vip.png" /><span>我的积分</span>
    </div>
    <router-link style="color: black" to="/cart"
      ><div class="item">
        <img src="~assets/img/profile/shoppingCart.png" /><span
          >我的购物车</span
        >
      </div></router-link
    >
    <div class="item">
      <img src="~assets/img/profile/downolad.png" /><span>下载购物APP</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'profileOption',
}
</script>
<style scoped>
.item {
  height: 50px;
  width: auto;
  /* padding:3px 20px; */
  display: flex;
  /* justify-content:center; */
  align-items: center;
  padding: 0 20px;
}
.item > img {
  background-size: 100%;
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
.item > span {
  font-size: 15px;
}
</style>