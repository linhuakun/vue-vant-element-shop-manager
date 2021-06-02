<template>
  <div id="app">
    <keep-alive exclude="order,user,userdatalistItem,moment">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar v-if="this.footShow" />
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  },
  data() {
    return {
      footShow: true
    };
  },
  watch: {
    $route(to, from) {
      let ThisPage = to.path;
      if (
        ThisPage == "/order" ||
        ThisPage == "/moment" ||
        ThisPage == "/user" ||
        ThisPage == "/bigdata" ||
        ThisPage == "/profile"
      ) {
        this.footShow = true;
      } else {
        this.footShow = false;
      }
    }
  },
  async mounted() {
    if (location.pathname == "/login") {
      this.footShow = false;
    } else {
      const user_id = window.sessionStorage.getItem("userId");
      try {
        const islogin = await this.$http.post("/users/ismanager", user_id);
        if (islogin.data.ps_ids != "1" && location.pathname != "/login") {
          this.$router.push("/login");
        } else {
        }
      } catch (err) {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style>
@import "./assets/css/base.css";
@media screen and (max-width: 500px) {
  .el-message {
    min-width: 300px !important;
  }
}
</style>
