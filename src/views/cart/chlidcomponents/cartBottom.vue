<template>
    <div class="cartBottom">
        <div class="showContent">
        
            <span class="num"><div  @click="clickAll($store.getters.isAll)" :class="this.$store.getters.isAll?'selectedTrue':'selectedFalse'"></div>&nbsp;&nbsp;总计：{{$store.getters.getSum}}</span>
        </div>
        <div class="submit">
           <van-button round @click="buy" size="small" style="width:100px" hairline color="linear-gradient(to right, #ff6034, #ee0a24)">
 立即购买
</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartBottom",
        created(){

        },
        data(){
            return {

            }
        },
        methods:{
            buy(){
                    if(Object.keys(this.$store.state.Products).length===0){
                        this.$toast("您还没有添加商品")
                    }
            },
            clickAll(e){
                    if (e){
                            this.$store.commit("setAllFalse")
                    }else{
                        this.$store.commit("setAllTrue")
                    }
            }
        }
    }
</script>

<style scoped>
.cartBottom{
    background-color: white;
    display: flex;;
    z-index: 999;
    height: 44px;
    width: 100%;
    justify-content: space-between;
}
    .cartBottom>div{

    }
    .submit{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 30%;
    }
    .showContent{
        display:flex;
        margin: 0 0 0 10px;
        align-items: center;
    }
.selectedTrue{
    display: inline-block;
    width:20px;
    height:20px;
    background-size:100%;
    background-image: url("../../../assets/img/cart/icon_xuanzhong_pre.png")
}
.selectedFalse{
    display: inline-block;
    width:20px;
    height:20px;
    background-size:100%;
    background-image: url("../../../assets/img/cart/icon_xuanzhong_n.png")
}
.num{
     font-size:16px;
     display: flex;
     justify-items: center;
}
.submit{
    font-size:14px;

}
</style>