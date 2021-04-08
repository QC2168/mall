<template>
    <div class="warpper" ref="warpper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "scroll",
        data(){
            return{
                scroll:null,
            }
        },
        props:{
            probeType:{
                type: Number,
                default() {
                    return 0
                }

            },
            pullUpLoad:{
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
    mounted() {
            this.scroll = new BScroll(this.$refs.warpper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad,
            })
        this.scroll.on("scroll",(position)=>{
          // console.log(position)
            this.$emit("onscroll",position)
        })
        this.scroll.on("pullingUp",()=>{
           this.$emit("pullingUp")

        })
    },
methods:{
    enterRefresh(){
        this.scroll.refresh()
    }
}
    }
</script>

<style scoped>

</style>