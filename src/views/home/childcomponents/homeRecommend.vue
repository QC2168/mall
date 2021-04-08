<template>
<div class="recommendDiv">
    <div v-for="item in recommendData" :key="item.link" class="recommend-item">
        <a :href="item.link">
            <img class="recommendImg" :src="item.image"><br>
            <div>{{item.title}}</div>
        </a>
    </div>
</div>
    
</template>
<script>
export default {
    name:"homeRecommend",
    props:{
    recommendData:{
        type:Array,
        default(){
            return []
        }
    }
    }
}
</script>
<style scoped>
.recommendDiv{
    display:flex;
    width:100%;
    margin:10px 0 0 0;
    padding-bottom:20px;
    text-align:center;
    border-bottom:10px solid #eee;
}
.recommend-item{
    flex:1;
}
.recommend-item img{
    width:60px;
height:60px;
margin-bottom:5px;
}
.recommend-item a{
   color:pink;
   text-decoration: none;
   
}
.recommend-item div{
    font-size:16px;
}
</style>