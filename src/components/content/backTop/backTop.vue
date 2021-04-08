<template>
    <div class="backdiv">
    </div>
</template>

<script>
    export default {
        name: "backTop"
    }
</script>

<style scoped>
    .backdiv{
        background-image: url("../../../assets/img/common/top.png");
        background-size: 100%;
        width: 44px;
        height: 44px;
        position:absolute;
        bottom:50px;
        right: 5px;
        z-index: 999;
    }
</style>