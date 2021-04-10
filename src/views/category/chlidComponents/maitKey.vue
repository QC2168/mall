<template>
<div class="maitKey">
 <div class="item" v-for="(item,index) in maitKey" :key="index">
    <a :href="item.link">
        <img class="itemImg" :src="item.image" alt="">
     </a><br>
            {{item.title}}
 
    </div>
</div>
   
</template>
<script>
export default {
    name:"maitKey",
    props:{
        maitKey:{
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .itemImg{
        width:80px;

  
    }
    .item{
        
        text-align: center;
    flex:1;
    font-size:14px;
    
    }
    .maitKey{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
    }
</style>