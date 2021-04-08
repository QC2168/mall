<template>
    <li class="itemCartList">
        <div class="left"><img  class="image" :src="itemCartList.image" alt=""></div>
        <div class="center">
            <div class="text">
               <span>{{itemCartList.title}}</span><br>
            <span>{{itemCartList.desc}}</span><br>
            <span style="display:flex;justify-content:space-between;"><span>{{itemCartList.price}}</span><span>数量：{{itemCartList.const}}</span></span> 
            </div>
            

            </div>
        <div class="right">
            <div @click="changeState(itemCartList.iid)" :class="itemCartList.isSelected?'selectedTrue':'selectedFalse'"></div>
           
        </div>
        
            
        </li>
     
    
    
</template>

<script>
    export default {
        name: "itemCartList",
        data(){
            return {

            }
        },
        props:{
            itemCartList:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            changeState(iid){
                    this.$store.commit("changeState",iid)
            }
        }
    }
</script>

<style scoped>
.itemCartList{
    width:100%;
    height:100px;
    border-bottom:1px solid #fff;
    display:flex
}
.left,.center,.right{
height:100%;
}
.left{
width:30%;
    display:inline-flex;
    justify-content:center;
    align-items: center;
    height:100%;
}
.center{
    padding: 18px 0 0 0;
width:60%;

    height:100%;
  
}
.text{
     line-height:18px; 
     font-size:12px;
}
.right{
    width:10%;
    display:inline-flex;
    justify-content:center;
    align-items: center;
    height:100%;
}
.image{

    width:70px;
    height:70px;
    border-radius: 10px;
    
}
.itemCartList >div>div> span{
       white-space: nowrap;  /*强制span不换行*/
      display: inline-block;  /*将span当做块级元素对待*/
      width: 90%;  /*限制宽度*/
      overflow: hidden;  /*超出宽度部分隐藏*/
      text-overflow: ellipsis;  /*超出部分以点号代替*/
      text-align:center;
}
.selectedTrue{
    width:20px;
    height:20px;
    background-size:100%;
    background-image: url("../../../assets/img/cart/icon_xuanzhong_pre.png")
}
.selectedFalse{
    width:20px;
    height:20px;
    background-size:100%;
    background-image: url("../../../assets/img/cart/icon_xuanzhong_n.png")
}
</style>