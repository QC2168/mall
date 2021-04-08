<template>
    <div class="goodsitem" @click="clickgoodsitem">
        <div>
        <img class="goodsitemImg" v-lazy="showImage" @load="itemImageLoad">
        <div class="title">{{goodsitem.title}}</div>
        <span class="price">￥{{goodsitem.price}}</span><van-icon name="star-o" /><span class="cfav">{{goodsitem.cfav}}</span>
    </div>
    </div>
</template>

<script>
    export default {
        name: "goodsListItem",
        created(){

        },
        computed:{
            showImage(){
                if(this.goodsitem.img){
                    return this.goodsitem.img
                }else if(this.goodsitem.show){
                    return this.goodsitem.show.img
                }else if(this.goodsitem.image){
                    return this.goodsitem.image
                }
                //let img = this.goodsitem.img ||this.goodsitem.show.img || this.goodsitem.image
               // return img
                //this.goodsitem.img ||this.goodsitem.show.img || this.goodsitem.image
            }
        },
        props:{
            goodsitem:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            itemImageLoad(){
                this.$bus.$emit('itemImageLoad')
            },
            clickgoodsitem(){
                this.$router.push("/detail/"+this.goodsitem.iid)
            }
        }
    }
</script>

<style scoped>
    .goodsitem{
        width: 40%;
    }
    .goodsitemImg{
        border-radius: 10%;
        background-size: 100%;
        width: 100%;
    }
.title{
    font-size: 10px;
    font-weight: bold;

}
.price{
color: pink;
    }
.cfav{
color: #ff9949;
    }

</style>