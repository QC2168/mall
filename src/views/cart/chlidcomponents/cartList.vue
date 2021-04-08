<template>
    <div>
    <ul>
        <itemCartList v-for="(item,index) in cartData" :key="index" :itemCartList="item" />
    </ul>
    </div>
</template>

<script>
import itemCartList from "./itemCartList"
    export default {
        
        name: "cartList",
        created(){
        },
        components:{
            itemCartList
        },
        props:{
            cartData:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>