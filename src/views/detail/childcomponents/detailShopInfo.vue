<template>
  <div class="shopInfo">
    <!--  店铺icon及name-->
    <div class="showInfoTop">
      <img class="shopIcon" :src="shop.shopLogo" alt />
      <span class="shopName">{{shop.name}}</span>
    </div>

    <div class="cSells_cGoods">
      <div style="text-align:center;border-right: 1px solid gray;">
        <span class="fontmax">总销量</span>
        <br />
        <span class="fontmax">{{shop.cSells}}</span>
      </div>
      <div style="text-align:center;border-right: 1px solid gray;">
        <span class="fontmax">全部宝贝</span>
        <br />
        <span class="fontmax">{{shop.cGoods}}</span>
      </div>
          <!-- 评论描述 -->
    <div class="score">
      <table>
        <tr v-for="item in shop.score" :key="item.name" class="shopScore">
          <td>{{item.name}}</td>
          <td style="text-align:center;">&nbsp;{{item.score}}</td>
          <td></td>
        </tr>
      </table>
    </div>
    </div>
    <!-- 进入店铺 -->
    <div class="enterShop"><van-button round type="info" size="small" style="width:200px">进店逛逛</van-button></div>
    

    <div></div>
  </div>
</template>

<script>
export default {
  name: "detailShopInfo",
  created() {

   
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.shopInfo {
}
.showInfoTop {
  height: 80px;
  display: flex;
  align-items: center;
}
.showInfoTop .shopName{
  font-size:16px;
  font-weight:bold;
}
.shopIcon {
  height: 40px;
  width: 40px;
  border-radius: 100%;
  border: 1px solid gray;
  margin-left: 15px;
  margin-right:15px;
}
.cSells_cGoods {
    height:80px;
    display: flex;
    align-items: center;
   
}
.cSells_cGoods > div {
  display: inline-block;width: 30%;
}

.fontmax{
     font-size: 16px;  
     font-weight: bold;
     text-align: center;
}
.shopScore{
  font-size:12px;
  line-height: 15px;
}
.score{
    padding-left:10px;
}
.enterShop{
    display:flex;
    align-items:"center";
    justify-content:center;
}
</style>