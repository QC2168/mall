<template>
  <div>
    <!-- 用户 -->
    <div class="user">
      <div class="headImg">
        <img src="../../../assets/img/profile/user_pic.gif" alt="" />
      </div>
      <div class="ops">
        <div class="op">登录</div>
        <div class="op">注册</div>
      </div>
    </div>
    <!-- 数据信息 -->
    <div class="userData">
      <div>
        <div class="value">0元</div>
        <div class="attribute">我的余额</div>
      </div>
      <div>
        <div class="value">0个</div>
        <div class="attribute">我的优惠</div>
      </div>
      <div>
        <div class="value">0分</div>
        <div class="attribute">我的积分</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'profileUserInfo',
}
</script>
<style scoped>
.user {
  height: 77px;
  background: pink;
  padding: 15px;
  font-size: 18px;
}

.headImg {
  border-radius: 100%;
  border: 1px solid white;
  width: 50px;
  height: 50px;
  background: white;
  overflow: hidden;
  margin: 0 auto;
}
.headImg img {
  width: 100%;
  height: 100%;
}
.ops {
  display: flex;
  margin: 12px 0 0 0;
  justify-content: center;
}
.op {
  margin: 0 10px;
  font-size: 14px;
  color: #444f59;
}
.userData {
  display: flex;
  justify-content: center;
  align-items: center;
}
.userData > div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  flex-direction: column;
  padding: 20px;
}
.userData .value {
  font-size: 16px;
}
.userData .attribute {
  font-size: 16px;
  color: pink;
}
</style>
