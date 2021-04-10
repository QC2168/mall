<template>
    <div class="TabContentDetail">
        <scroll class="wrapper">
            <maitKey :maitKey="MaitKeData"></maitKey>
    <tabControl @tabClick="tabClick" :titles="titles"></tabControl>
    <goodsList :goods="goodsList"></goodsList>
        </scroll>
    
    </div>
</template>
<script>
import maitKey from "./maitKey"
import tabControl from "components/content/tabControl/tabControl"
import goodsList from "components/content/goods/goodsList.vue"
import goodsListItem from "components/content/goods/goodsListItem.vue"
import scroll from "components/content/scroll/scroll"
export default {
    name:"TabContentDetail",
    components:{
maitKey,tabControl,goodsList,scroll
    },
    data(){
        return{
                titles:["综合","新品","数量"],
                tabClickIndex:0
        }
    },
    props:{
MaitKeData:{
    default(){
        return []
    }
},
goodsList:{
    default(){
        return []
    }
}
    },
    methods:{
tabClick(index){
   // this.tabClickIndex=index;
    switch(index){
        case 0:
           this.tabClickIndex= "pop";
            break;
         case 1:
           this.tabClickIndex="new";
            break;
         case 2:
            this.tabClickIndex="sell";
            break;
    }
    this.$emit("tabClick",this.tabClickIndex)

}
    }
}
</script>
<style scoped>
.wrapper{
    height: calc(100vh - 96px);
    overflow: hidden;
}
.TabContentDetail{

   
}
</style>