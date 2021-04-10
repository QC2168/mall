<template>
  <div>
    <div class="title">{{ goods.title }}</div>
    <div class="priceLine">
      <span class="price">￥{{ goods.lowNowPrice }}</span
      >&nbsp;<span v-show="goods.oldPrice" class="oldPrice">{{
        goods.oldPrice
      }}</span
      ><span v-show="goods.discountDesc" class="discountDesc">{{
        goods.discountDesc
      }}</span>
    </div>
    <div class="columns">
      <div class="itemColumns" v-for="item in goods.columns" :key="item">
        <span>{{ item }}</span>
      </div>
    </div>
    <div class="services">
      <div class="itemServices" v-for="item in goods.services" :key="item.name">
        <img style="margin-right:4px" :src="item.icon" alt="" />{{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBaseInfo',
  created() {},
  data() {
    return {}
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {},
}
</script>

<style scoped>
.title {
  margin: 10px 0;
  padding: 0 5px;
  font-size: 15px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(51, 51, 51);
  font-weight: bold;
  visibility: visible;
  text-align: justify;
}
.priceLine {
  display: flex;
  align-items: center;
  width: 30px;
  margin: 10px 0;
}
.price {
  color: pink;
  font-size: 22px;
}

.oldPrice {
  color: gray;
  text-decoration: line-through;
  font-size: 22px;
}

.discountDesc {
  background-color: pink;
  border-radius: 6px;
  padding: 3px 6px;
  white-space: nowrap;
  font-size: 12px;
  margin: 0 10px;
}
.columns {
  margin: 2px 0 2px 0;
  display: flex;

  /* box-shadow: 0px 1px 0px #888888; */
  flex-direction: row;
  flex-wrap: wrap;
}
.itemColumns {
  flex: 1;
  justify-content: space-between;
  font-size: 15px;
  text-align: center;
}
.services {
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 5px;
}
.itemServices {
  width: 33%;
  justify-content: space-between;
  font-size: 14px;
  margin: 0 0 6px 0;
}
.itemServices img {
  width: 15px;
  height: 15px;
}
</style>