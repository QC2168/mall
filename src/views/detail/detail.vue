f<template>
    <div class="detail">

        <detail-navbar @tabClick="tabClick" ref="navbar" class="detailNavbar"></detail-navbar>
        <Scroll @onscroll="contentscroll" :probeType="2" class="detailcontent" ref="Scroll">
            <detail-swiper :swiperImgData="swiperImgData"></detail-swiper>
<!--        商品信息商家信息-->
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detailContent ref="Content" @loadImage="loadImage" :detailContentImg="detailContentImg" :detailContentParams="detailContentParams" />
            <detail-comment ref="comment" :detailCommentData="detailCommentData"></detail-comment>
            <goodsList ref="Recommend" :goods="goodsRecommendData" />
    
        </Scroll>
        <detailBottomNav @addToCart="addToCart" />
        <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>

    import DetailNavbar from "./childcomponents/detailNavbar";
    import {getDetail,getRecommend,Goods,Shop} from "../../network/detail"
    import DetailSwiper from "./childcomponents/detailSwiper";
    import DetailBaseInfo from "./childcomponents/detailBaseInfo";
    import DetailShopInfo from "./childcomponents/detailShopInfo";
    import Scroll from "../../components/content/scroll/scroll"
    import detailContent from "./childcomponents/detailContent.vue"
    import DetailComment from "./childcomponents/detailComment";
    import detailBottomNav from "./childcomponents/detailBottomNav";
    import BackTop from "../../components/content/backTop/backTop";
    import goodsList from "../../components/content/goods/goodsList"
    import { Toast } from 'vant';
    export default {
        name: "detail",
        components: {
            BackTop,
            DetailComment,
            DetailShopInfo,
            DetailBaseInfo,
            DetailSwiper,
            DetailNavbar,
            Scroll,
            detailContent,
            goodsList,
            detailBottomNav
        },
        created(){
            this.iid=this.$route.params.iid;
            getDetail(this.iid).then((res)=>{
                const rr=res.result;
                //获取轮播图数据
                this.swiperImgData=rr.itemInfo.topImages;
                //获取信息数据
                this.goods=new Goods(rr.columns,rr.itemInfo,rr.shopInfo.services);
                //获取商家数据
                this.shop=new Shop(rr.shopInfo)
                //详细页图片-产品参数
                //this.detailContentData=[rr.detailInfo,rr.itemParams];
                this.detailContentImg=rr.detailInfo;
                this.detailContentParams=rr.itemParams;
                //评论数据
                this.detailCommentData=rr.rate.list[0];
            })
            getRecommend().then((res)=>{
                this.goodsRecommendData=res.data.list;
            })


        },
        data(){
            return {
                iid:null,
                swiperImgData:[],
                goods:{},
                shop:{},
               detailContentImg:{},
               detailContentParams:{},
                detailCommentData:{},
                isShowBackTop:false,
                theme:[],
                goodsRecommendData:[],
                currentNavIndex:0,
            }
        },

        methods:{
            addToCart(){
                const product={};
                product.image=this.swiperImgData[0];
                product.title=this.goods.title;
                product.desc=this.goods.desc;
                product.price=this.goods.price;
                product.iid=this.iid;
                product.isSelected=true;
                product.lowNowPrice=this.goods.lowNowPrice;
                //this.$store.state.Cart.push(product)
                this.$store.dispatch("addToCart",product).then((res)=>{
                    Toast.success('添加成功');
                },(rej)=>{
                    Toast.fail('添加失败');
                })
            },
            tabClick(index){
                this.$refs.Scroll.scroll.scrollTo(0,-this.theme[index],500)
                if(index==0){
                    this.isShowBackTop=false;
                }else{
                    this.isShowBackTop=true;
                }

                // if(-position.y>1000){
                //     this.isShowBackTop=true;
                // }else if(-position.y<1000){
                //     this.isShowBackTop=false;
                // }

            },
            loadImage(){
                this.$refs.Scroll.enterRefresh();
                this.theme=[];
                this.theme.push(0)
                this.theme.push(this.$refs.Content.$el.offsetTop)
                this.theme.push(this.$refs.comment.$el.offsetTop)
                this.theme.push(this.$refs.Recommend.$el.offsetTop)
                this.theme.push(Number.MAX_VALUE)
               
            },
            //监听滚动条
            contentscroll(position){
                //判断按钮显示隐藏

                if(-position.y>1000){
                    this.isShowBackTop=true;
                }else if(-position.y<1000){
                    this.isShowBackTop=false;
                }
                //判断阶段
                for(var i=0;i<=this.theme.length;i++){
                    if(this.currentNavIndex!=i&&(-position.y>=this.theme[i] && -position.y<this.theme[i+1])){
                        this.currentNavIndex=i;
                        this.$refs.navbar.currentIndex=this.currentNavIndex;
                }
                }
            },
            //滚回顶部
            backTop(){
                this.$refs.Scroll.scroll.scrollTo(0,0,500)
            },


        }

    }
</script>

<style scoped>
.detail{

}
.detailcontent{
height: calc(100vh - 96px);
/* height:100vh; */
    overflow: hidden;
    padding-top:44px;
}
.detailNavbar{
position:relative;
    z-index:10;
    background-color: #fff;

}
</style>