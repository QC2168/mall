<template>
    <div class="category">
         <nav-bar class="nav-bar"><div  class="NavBarCenter" slot="Center">分类</div></nav-bar>
         <div class="categoryContent">
             <TabContentCategory class="categoryLeft" @currentMaitKey="currentMaitKey" :tabList="tabList"></TabContentCategory>
         <TabContentDetail :goodsList="goodsList" @tabClick="tabClick" :MaitKeData="MaitKeData" class="categoryRight"></TabContentDetail>


         </div>
         

    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import TabContentCategory from "./chlidComponents/TabContentCategory";
import TabContentDetail from "./chlidComponents/TabContentDetail";
import goodsListItem from "../../components/content/goods/goodsList.vue"
import {getCategory, getSubcategory, getCategoryDetail} from "../../network/category";
    export default {
        name: "category",
        components:{
            NavBar,TabContentCategory,TabContentDetail
        },
        created(){
            //获取tab数据
            this.getCategory(),
            this.getSubcategory(this.MaitKe)
     this.getCategoryDetail("10062603","pop")
          
        },
        data(){
            return{
                tabList:"",
                //tab的内容
                MaitKe:5253,
                MaitKeData:"",
                tabIndex:0,
                goodsList:"",
                //当前maitke对应展示的内容
                tabType:'pop'
            }
        },
        methods:{
            //网络请求相关方法
            getCategory(){
            getCategory().then((res)=>{
                
                this.tabList=res.data.category.list;
            })
            },
            getSubcategory(MaitKe){
                getSubcategory(MaitKe).then((res)=>{
                this.MaitKeData=res.data.list
            })
            },
            getCategoryDetail(miniWallkey, type){
                    getCategoryDetail(miniWallkey, type).then((res)=>{
                this.goodsList=res;
                    })
            },
            //切换tab
            currentMaitKey(MaitKe,tabIndex){
                this.MaitKe=MaitKe,
                //记录当前tab标签的索引
                this.tabIndex=tabIndex;
                this.getSubcategory(MaitKe);
                this.getCategoryDetail(this.miniWallkey,this.tabType)
            },
            //切换tab商品展示
            tabClick(type){
                this.getCategoryDetail(this.miniWallkey,type)
                this.tabType=type
            }
        },
        computed:{
            miniWallkey(){
                return this.tabList[this.tabIndex].miniWallkey;
            }
        }
    }
</script>

<style scoped>
.category{
   
}
.nav-bar{
    background:pink;
    color:white;
      position:fixed;
        left:0;
        right:0;
        top:0;
        z-index:2;

}
.categoryContent{
    position: relative; 
    display:flex;
    padding-top:44px;
    padding-bottom: 54px;
}
.categoryLeft{
    width:25%;
}
.categoryRight{
flex:1;

}
.NavBarCenter{
    color: white;
    font-size:18px;
    font-weight:bold;
}
</style>