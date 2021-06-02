<template>
  <div class="order">
    <NavBar class="nav-bar"><div slot="center">用户管理</div></NavBar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
      @pullingDown="pullingDown"
    >
      <userdatalist :list="list" v-if="this.isexit"></userdatalist>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import scroll from "@/components/common/Scroll/Scroll";
import userdatalist from "@/components/content/userdata/userdatalist";
import { getusersdata } from "@/network/user.js";

export default {
  name: "order",
  components: {
    NavBar,
    scroll,
    userdatalist
  },
  data() {
    return {
      list: [],
      isexit:true,
    };
  },
  created() {
    this.getAllusersdata()
  },
  mounted() {
    this.$bus.$on('getuserdatalist',this.isrefresh)
  },
  methods: {
    isrefresh(){
      this.isexit=false;
      this.getAllusersdata();
      this.isexit=true;
    },
    async getAllusersdata(){
       const res=await getusersdata();
       this.list = res.data;
    },
    loadMore() {
      this.$refs.scroll.refresh();
    },
    pullingDown() {
      this.pullingdown = true;
      setTimeout(() => {
        this.pullingdown = false;
        this.$refs.scroll.finishPullDown();
      }, 300);
    }
  }
};
</script>

<style scoped>
.order {
  position: relative;
  height: 100vh;
}

.content {
  left: 0;
  right: 0;
  top: 44px;
  bottom: 44px;
  overflow: hidden;
  position: absolute;
}
.nav-bar {
  background-color: #df3832;
  color: #fff;
  height: 44px;
  position: relative;
}
</style>
