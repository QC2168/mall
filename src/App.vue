<template>
  <div id="app">
    <transition name="slide-fade">
      <keep-alive exclude="detail,TabContentDetail">
        <router-view></router-view>
      </keep-alive>
    </transition>

    <tabnav :cartConst="this.$store.getters.getConst"></tabnav>
  </div>
</template>

<script>
import tabnav from './components/content/tabnav/tabnav'
export default {
  name: 'app',
  created() {},
  data() {
    return {}
  },
  components: {
    tabnav,
  },
}
</script>

<style>
@import './assets/css/base.css';
</style>
