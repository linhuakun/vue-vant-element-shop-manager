<template>
  <div id="shop-item" v-if="isexit">
    <van-swipe-cell>
      <van-card
        :desc="isiphone()"
        :title="'姓名:' + itemInfo.name"
        class="goods-card"
        :thumb="isavatar()"
      >
        <template #tags>
          <van-tag vplain type="danger" class="van1"
            >创建时间:{{ createtime() }}</van-tag
          >
          <van-tag vplain type="primary" class="van1"
            >用户权限等级:{{ ismanager() }}</van-tag
          >
        </template>
      </van-card>
      <template #right>
        <van-button
          square
          text="授权"
          type="primary"
          class="delete-button"
          @click="emitpower()"
        />
      </template>
    </van-swipe-cell>
  </div>
</template>
<script>
export default {
  name: "userdatalistItem",
  components: {},
  data() {
    return {
      isexit: true
    };
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {},

  created(){
  },
  mounted() {

  },
  methods: {
    createtime() {
      return this.$moment(this.itemInfo.createAt).format(
        "MMMM Do YYYY, h:mm:ss a"
      );
    },
    isavatar() {
      if (this.itemInfo.avatar_url!=null) {
        return this.itemInfo.avatar_url;
      } else {
        return "http://47.108.153.30:8001/users/45/avatar";
      }
    },
    isiphone() {
      if (this.itemInfo.iphone == 0) {
        return "电话:未绑定电话";
      } else {
        return "电话" + this.itemInfo.iphone;
      }
    },
    ismanager() {
      if (this.itemInfo.ps_ids == "1") {
        return "管理员";
      } else {
        return "用户";
      }
    },
    async emitpower() {
      if (this.itemInfo.ps_ids ==null) {
        var formData = {};
        formData.id = this.itemInfo.uid;
        formData.name = this.itemInfo.name;
        try {
          await this.$http.post("/users/manager/emitpower",formData);
          this.$bus.emit('getuserdatalist');
          this.isexit=false
          this.$message.success("授权成功");
          const self=this
          self.isexit=true
        } catch (err) {
          this.$message.error("授权失败");
        }
      } else {
        this.$message.error("已经授权");
      }
    }
  }
};
</script>

<style scoped>
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
#shop-item >>> .van-tag--danger{ 
  background-color: #fff;
  color:#666;
  position: relative;
  left:-5px;
}
.van-card__content >>> .van-tag--primary{
  background-color: #fff;
  color:red;
  position: relative;
  left:-5px;
  top:5px
}
</style>
