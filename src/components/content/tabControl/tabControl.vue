<template>
    <div class="tabControl">
        <div v-for="(item,index) in titles" :key="index" class="tabControlItem"  @click="itemClick(index)" :class="{active:index == currentIndex}">
           <span>{{item}}</span> 
        </div>
    </div>
</template>
<script>
export default {
    name:"tabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index;
            this.$emit('tabClick',index)
        }
    }
}
</script>
<style scoped>
    .tabControl{
        display:flex;
        width:100%;
    }
    .tabControlItem{
        flex:1;
        font-size:15px;
        height:30px;
        line-height:30px;
        text-align: center;
    }
    .active{
        color:pink;
    }
    .active span{
        color:pink;
        border-bottom:2px solid pink;
    }
</style>