<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path="/order" activeColor="red">
      <img slot="item-icon"    src="@/assets/img/order/order.svg" alt="">
      <img slot="item-icon-active"    src="@/assets/img/order/order_active.svg" alt="">
      <div slot="item-text">订单</div>
    </tab-bar-item>
    <tab-bar-item path="/moment" activeColor="red">
      <img slot="item-icon"    src="@/assets/img/moment/moment.svg" alt="">
      <img slot="item-icon-active"    src="@/assets/img/moment/moment_active.svg" alt="">
      <div slot="item-text">动态</div>
    </tab-bar-item >
    <tab-bar-item path="/user" activeColor="red">
      <img slot="item-icon"    src="@/assets/img/user/user.svg" alt="">
      <img slot="item-icon-active"    src="@/assets/img/user/user_active.svg" alt="">
      <div slot="item-text">用户</div>
    </tab-bar-item>
    <tab-bar-item path="/bigdata" activeColor="red">
      <img slot="item-icon"    src="@/assets/img/bigdata/bigdata.svg" alt="">
      <img slot="item-icon-active"    src="@/assets/img/bigdata/bigdata_active.svg" alt="">
      <div slot="item-text">数据</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon"    src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active"    src="@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";


export default {

name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  },
}
</script>

<style scoped>
.tab-bar{
  position: absolute;
  bottom: 0;
}
</style>
