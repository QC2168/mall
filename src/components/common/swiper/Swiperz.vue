<!-- The ref attr used to find the swiper instance -->
<!-- The ref attr used to find the swiper instance -->
<template>
    <swiper :options="swiperOption">
        <slot></slot>
    </swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {

        name: 'Swiperz',
        components: {
            swiper,
            swiperSlide
        },
        data(){
            return{
                swiperOption: {//swiper3
                    autoplay: 3000,
                    speed: 1000,
                }
            }
        }
    }
</script>
<style scoped>

</style>