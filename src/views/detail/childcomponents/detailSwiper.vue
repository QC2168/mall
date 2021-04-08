<template>


        <swiperz class="swiperz">
            <swiper-slide v-for="(item) in swiperImgData" :key="item">
                <img class="SwiperzImg" :src="item">
            </swiper-slide>
        </swiperz>



</template>

<script>

    import Swiperz from "../../../components/common/swiper/Swiperz";
    export default {
        name: "detailSwiper",
        components: {Swiperz},
        props:{
            swiperImgData:{
                type:Array,
                default(){
                    return []
                }
            }
        },
    }
</script>

<style scoped>
    .swiperz{
        height: 350px;
        overflow: hidden;
        width:100%;
    }
    .SwiperzImg{
        background-size: 100%;
        width: 100%;
    }
</style>