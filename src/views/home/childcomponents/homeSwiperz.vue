<template>
<div>
    <Swiperz>
            <swiper-slide v-for="(item) in SwiperzImgData" :key="item.link"><a :href="item.link">
                <img class="SwiperzImg" :src="item.image" :alt="item.title" @load="loadImage">
            </a></swiper-slide>
        </Swiperz>
</div>
    
</template>
<script>
import Swiperz from '../../../components/common/swiper/Swiperz'
export default {
    name:"homeSwiperz",
    components:{
            Swiperz
        },
    data(){
        return{

        }
    },
    props:{
        SwiperzImgData:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        loadImage(){
            this.$emit("loadImage")
        }
    }
}
</script>
<style scoped>
.SwiperzImg{
    width:100%;
}
</style>