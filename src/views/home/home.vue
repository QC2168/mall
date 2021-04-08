<template>

    <div class="home">
        <NavBar class="NavBar"><div class="NavBarCenter" slot="Center">
            首页
        </div></NavBar>
        <tabControl @tabClick="tabClick" v-show="isShowTabControl" class="tabControl1" ref="tabControl1" :titles="['流行','新款','精选']"/>

        <scroll
                class="warpper"
                ref="scroll"
                :probeType="setTypebescroll"
                @onscroll="contentscroll"
                :ispullUpLoad="ispullUpLoad"
                @pullingUp="loadMore"
        >
            <homeSwiperz @loadImage="loadImage" :SwiperzImgData="banner"></homeSwiperz>
            <homeRecommend :recommendData="recommend"></homeRecommend>
            <feature/>
            <tabControl @tabClick="tabClick" ref="tabControl2" :titles="['流行','新款','精选']"/>
            <goods-list :goods="goods[currentType].list"></goods-list>

        </scroll>

        <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    </div>

</template>

<script>
   import NavBar from '../../components/common/navbar/NavBar'
   import feature from './childcomponents/feature'
   import homeSwiperz from './childcomponents/homeSwiperz'
   import homeRecommend from './childcomponents/homeRecommend'
   import tabControl from '../../components/content/tabControl/tabControl'
   import {getHomeMultiddata,getHomeGoods} from '../../network/home'
   import goodsList from "../../components/content/goods/goodsList";
   import Scroll from "../../components/content/scroll/scroll";
   import BackTop from "../../components/content/backTop/backTop";
   export default {
        name: "home",
        components:{
            BackTop,
            Scroll,
            goodsList,
            NavBar,
            homeSwiperz,
            homeRecommend,
            feature,
            tabControl,
        },
       data(){
            return{
                banner:null,
                 recommend :null,
                 goods:{
                     pop:{page:1,list:[]},
                     new:{page:1,list:[]},
                     sell:{page:1,list:[]}
                 },
                currentType:'pop',
                setTypebescroll:3,
                isShowBackTop:false,
                ispullUpLoad:true,
                tabControlTop:0,
                isShowTabControl:false,
                saveY:0,
            }
       },
       created() {
            this.getHomeMultiddata();
          this.getHomeGoods('pop');
          this.getHomeGoods('new');
           this.getHomeGoods('sell');

       },
       mounted(){
            const refresh =this.debounce(this.$refs.scroll.enterRefresh,200)
           this.$bus.$on('itemImageLoad',()=>{
               // this.$refs.scroll.scroll.refresh()
               refresh()
           })
          // console.log(this.$refs.tabControl2.$el.offsetTop)
       },
       activated(){
           this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
           this.$refs.scroll.scroll.refresh()
       },
       deactivated(){

       },
       methods:{

               loadImage(){
               this.tabControlTop=this.$refs.tabControl2.$el.offsetTop;
           },
            //防抖
           // 将会包装事件的 debounce 函数
         debounce(fn, delay=300) {
       // 维护一个 timer
       let timer = null;
       return function() {
           // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
           let context = this;
           let args = arguments;
           clearTimeout(timer);
           timer = setTimeout(function() {
               fn.apply(context, args);
           }, delay);
       }
   },

           //  //下拉加载更多

           loadMore(){
               this.getHomeGoods(this.currentType);
           },
            //监听滚动条判断按钮显示隐藏
           contentscroll(position){
               if(-position.y>1000){
                   this.isShowBackTop=true;
               }else{
                   this.isShowBackTop=false;
               }
               if(-position.y>=this.tabControlTop-this.$refs.tabControl2.$el.offsetHeight){
                   this.isShowTabControl=true
               }else{
                   this.isShowTabControl=false;
               }
               this.saveY=position.y
           },
            //滚回顶部
           backTop(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
           },
            //获取切换时的方法
           tabClick(index){
               switch (index) {
                   case 0:
                       this.currentType='pop';
                       break;
                   case 1:
                       this.currentType='new';
                       break;
                   case 2:
                       this.currentType='sell';
                       break;
               }
                this.$refs.tabControl1.currentIndex=index;
               this.$refs.tabControl2.currentIndex=index;
           },
            //网络请求相关的方法
           getHomeMultiddata(){
               getHomeMultiddata().then(
               res=>{
                       this.banner=res.data.banner.list;
                       this.recommend=res.data.recommend.list
               }
           )
           },
           //获取列表数据  传入一个列表值
           getHomeGoods(type){
               const page =this.goods[type].page;
            getHomeGoods(type,page).then(
               res=>{
                    this.goods[type].list.push(...res.data.list)
                   this.goods[type].page+=1;
                    //完成下拉加载更多
                   this.$refs.scroll.scroll.finishPullUp()
               }
           )
           }
           
       }
   }
</script>

<style scoped>
    /*@import "~swiper/dist/css/swiper.css";*/
    .home{
      
        /*padding-bottom:50px;*/
        height: 100vh;
    }
    .NavBar{
        background: pink;
        position:relative;
        left:0;
        right:0;
        top:0;
        z-index:2;
    }
.NavBarCenter{
    color: white;
    font-size:18px;
    font-weight:bold;
}
.warpper{

height: calc(100vh - 96px);
/* height:100vh; */
    overflow: hidden;
    /* padding-top:44px; */

}
.tabControl1{
    position:absolute;
    background-color:rgb(255, 255, 255);
    z-index:10;
}
</style>