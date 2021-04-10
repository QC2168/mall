<template>
    <div class="goodsitem">
        <goods-list-item v-for="item in goods" :goodsitem="item" :key="item.id"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from "./goodsListItem";
    export default {
        name: "goodList",
        components: {GoodsListItem},
        created(){
                
        },
        props:{
            goods:{
                // type:Array,
                default(){
                    return {}
                }
            }
        },

    }
</script>

<style scoped>
    .goodsitem{
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        padding:10px 10px 0 10px;
    }
</style>