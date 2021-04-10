<template>
    <div class="nav-bar">
        <div class="Left"><slot name="Left"></slot></div>
        <div class="Center"><slot name="Center"></slot></div>
        <div class="Right"><slot name="Right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height:44px;

        line-height: 44px;
        text-align: center;
    }
    .Left,.Right{
        width: 60px

    }
    .Center{
        flex: 1;
    }
</style>