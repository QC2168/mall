<template>
    <div>

        <nav-bar class="navbar"><div slot="Center" class="navbarCenter">个人中心</div></nav-bar>
        <transition name="login" mode="out-in"><router-view></router-view></transition>

<!--        <loginFrom @tologin="tologin"></loginFrom>-->
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";

    export default {
        name: "login",
        components: {NavBar,},
        methods:{
            tologin(e){
                console.log(e)
            }
        }
    }
</script>

<style scoped>
/* 动画 */
.login-enter{
    transform: translateX(100%);
    opacity: 0.5;
}

.login-enter-active{
    transition: all 1s ease;
}
.login-enter-to{

}
.login-leave{

}
.login-leave-active{
    transition: all .5s;
}
.login-leave-to{
    transform: translateX(-100%);
    opacity: 0.5;
}

.navbar{
    background:pink;

}
    .navbarCenter{
        color:white;
    }
</style>
