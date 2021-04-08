<template>
<div>
    <NavBar class="detallNavBar">
        <div slot="Left" class="backbox" @click="clickback">
            <img src="../../../assets/img/common/back.png" class="back" alt="">
        </div>
        <div class="title" slot="Center">
            <div v-for="(title,index) in titles" :key="title" class="title-item" :class="{active:index==currentIndex}" @click="itemClick(index)">{{title}}</div>
        </div>

    </NavBar>
</div>

</template>

<script>

    import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "detallNavbar",
        components:{
            NavBar

        },
        data(){
            return {
                titles:['商品','详细','评论','其他'],
                currentIndex:0,

            }
        },
        methods:{
            itemClick(index){
                this.currentIndex=index;
                this.$emit("tabClick",index)
            },
            clickback(){
                this.$router.back()
            }
        },

    }
</script>

<style scoped>
.title{
    display:flex;

}
.title-item{
    flex:1;
    font-size:18px;
}
    .active{
        color: pink;
    }
    .backbox{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .back{
        background-size: 100%;
        height: 30px;
        width:30px;
    }
</style>