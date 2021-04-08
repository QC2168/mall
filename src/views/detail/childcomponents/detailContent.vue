<template>
    <div class="detailContent"  v-if="Object.keys(detailContentImg).length!==0">
       <div>
            <div class="desc">{{detailContentImg.desc}}</div>
       </div>
<!--        尺寸列表-->
        <div>
            <table v-if="Object.keys(detailContentParams).length!==0" class="itemSizeParameter">
                <tr v-for="(item,index) in detailContentParams.rule.tables[0]" :key="index">
                    <td>{{item[0]}}</td>
                    <td>{{item[1]}}</td>
                    <td>{{item[2]}}</td>
                </tr>
            </table>
        </div>
<!--        商品信息列表-->
        <div>
            <table class="itemParameter">
                <tr v-for="item in detailContentParams.info.set" :key="item.key">
                    <td>{{item.key}}</td>
                    <td class="itemValue">{{item.value}}</td>
                </tr>
            </table>
        </div>
<!--        img
-->
        <div class="contentImage" v-for="item in detailContentImg.detailImage[0].list" :key="item">
            <img @load="loadImage" :src="item" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"detailContent",
    created(){
    },
    data(){
        return{
              
        }
    },
    methods:{
        loadImage(){
            this.$emit('loadImage');
        }
    },
    props:{
        detailContentImg:{
            type:Object,
            default(){
                return {}
            }
        },
        detailContentParams:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    mounted(){
    
        
    }
}
</script>
<style scoped>
.detailContent{
    background:white;
    padding: 5px;
}
    .contentImage>img{
        background-size: 100%;
        width: 100%;
    }
    .itemParameter,.itemSizeParameter{
        width: 100%;
        text-align: center;
        border:2px solid black;
        margin-bottom: 10px;
        white-space: nowrap;  

 text-overflow:ellipsis; 

 overflow:hidden;
    }
    .itemParameter tr,.itemSizeParameter tr{
        height: 22px;
    }
    .itemParameter tr td {
        width: 50%;
        font-size: 13px;
        border-bottom: 1px solid #888888;
    }
    .itemSizeParameter tr td {
        font-size: 13px;
        width: 25%;
        border-bottom: 1px solid #888888;
    }
    .itemParameter .itemValue
    {
        color: rgb(167, 129, 135);
        font-size:13px;
    }
    
    .desc{
        font-size:16px;
        margin:10px 0;
        text-align: justify;
    }
</style>