<template>
    <div class="TabContentCategory">
        <scroll class="wrapper">
<ul class="tabList">
            <li class="tabItem" :class="{tabItemSelection:tabItemIndex==index}
            " @click="tabItemClick(index,item.maitKey)" v-for="(item,index) in tabList" :key="item.title">{{item.title}}</li>
        </ul>
        </scroll>
        
    </div>
</template>
<script>
import scroll from "components/content/scroll/scroll"
export default {
    name:"TabContentCategory",
    data(){
        return{
            tabItemIndex:0,
        }
    },
    components:{
        scroll
    },
    props:{
        tabList:{
            default(){
                return []
            }
        }
    },
    methods:{
        tabItemClick(index,maitKey){
this.tabItemIndex=index;
this.$emit("currentMaitKey",maitKey,index)
        }
    }
}
</script>
<style scoped>
.TabContentCategory{
    padding-top:19px;
}
.wrapper{
    /*height: calc(100vh - 96px);*/
    height: calc(100vh - 121px);
    overflow: hidden;
}
.tabList{


}
.tabList .tabItem{
    margin:25px auto 25px auto;
    text-align: center;
    font-size:15px;
}
.tabList .tabItemSelection{
    color:pink;
    font-weight:bold;
    border-right: 3px solid pink;

}
</style>