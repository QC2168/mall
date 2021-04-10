<template>
  <div>
    <navbar class="navbar" slot="Center"
      ><div class="NavBarCenter" slot="Center">商城项目</div></navbar
    >
    <profileUserInfo></profileUserInfo>
    <profileOption></profileOption>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar.vue'
import profileUserInfo from './childcomponents/profileUserInfo.vue'
import profileOption from './childcomponents/profileOption.vue'
export default {
  name: 'profile',
  components: {
    profileUserInfo,
    navbar,
    profileOption,
  },
}
</script>

<style scoped>
.navbar {
  background: pink;
}
.NavBarCenter {
  color: white;
  font-size: 18px;
  font-weight: bold;
}
</style>