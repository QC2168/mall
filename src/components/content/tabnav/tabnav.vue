<template>
    <div>
  <van-tabbar
   route
  active-color="#07c160"
  inactive-color="#000"
>
  <van-tabbar-item replace icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item replace icon="bag-o" to="/category">分类</van-tabbar-item>
  <van-tabbar-item replace icon="shopping-cart-o" :info="cartConst" to="/cart">购物车</van-tabbar-item>
  <van-tabbar-item replace icon="user-o" to="/profile">我的</van-tabbar-item>
  
</van-tabbar>
    </div>
</template>
<script>
export default {
    name:"tabnav",
    props:{
        cartConst:{
          type:Number,
          default(){
            return null
          }
        }
    },

    
}
</script>
<style scoped>
    
</style>