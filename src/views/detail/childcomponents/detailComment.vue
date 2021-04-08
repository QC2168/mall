<template>
  <div v-if="Object.keys(detailCommentData).length != 0">
    <div class="headTitle"><span>用户评论</span><span>更多</span></div>
    <div class="commentDiv">
      <div class="bodyTop">
        <img
          class="headImage"
          :src="detailCommentData.user.avatar"
          alt=""
        /><span>{{ detailCommentData.user.uname }}</span>
      </div>
      <p class="content">{{ detailCommentData.content }}</p>
      <p class="contentGood" style="color: #888888; margin-top: 2px">
        {{ detailCommentData.created | getDate }}&nbsp;&nbsp;{{
          detailCommentData.style
        }}
      </p>
      <div class="imgs">
        <img
          v-for="item in detailCommentData.images"
          :key="item"
          :src="item"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailComment',
  created() {},
  data() {
    return {}
  },
  props: {
    detailCommentData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  mounted() {},
  filters: {
    getDate(value) {
      const myDate = new Date(value)
      return myDate.format('yyyy-MM-dd')
    },
  },
}
</script>

<style scoped>
.headTitle {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 0 12px 0 12px;
}
.headImage {
  border-radius: 100%;
  border: 1px solid yellow;
  height: 30px;
  margin: 0 10px 0 0px;
}
.bodyTop {
  height: 55px;
  display: flex;
  align-items: center;
  font-size: 13px;
}
.imgs {
  margin: 5px auto;
  width: 90%;
}
.imgs > img {
  width: 30%;
  margin-bottom: 2px;
  border-radius: 3px;
}
.commentDiv {
  margin-left: 12px;
}
.content {
  font-size: 14px;
  margin: 4px 0 10px 0;
}
.contentGood {
  font-size: 12px;
}
</style>