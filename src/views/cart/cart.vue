<template>
    <div class="cart">
       
        <nav-bar class="nav-bar"><div class="NavBarCenter" slot="Center">购物车</div></nav-bar>
      
      <Scroll class="warpper">
          <CartList :cartData="cartData" />
      </Scroll>
      <cart-bottom class="cart-bottom"></cart-bottom>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import CartBottom from "./chlidcomponents/cartBottom";
    import CartList from "./chlidcomponents/cartList"
    import Scroll from "../../components/content/scroll/scroll"
    export default {
        name: "cart",
        components: {CartBottom, NavBar,CartList,Scroll},
        created(){
            //获取购物车数据
            this.cartData=this.$store.state.Products;
        },
        data(){
            return {
                cartData:null,
            }
        },
    }
</script>

<style scoped>
.NavBarCenter{
color:white;
font-size:18px;
    font-weight:bold;
}
.cart{
    height:100%;
}
.nav-bar{
    background-color: pink;
    color: white;
}
/deep/ .van-submit-bar{
    position: fixed!important;
    bottom:50px!important;
}
.warpper{
    height:calc(100vh - 138px);
    overflow: hidden;
}
</style>