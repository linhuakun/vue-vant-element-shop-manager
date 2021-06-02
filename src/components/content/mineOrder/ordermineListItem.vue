<template>
  <div id="shop-item" v-if="isexit">
    <van-swipe-cell>
      <template #left>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="remove"
        />
      </template>
      <van-card
        :num="itemInfo.count"
        :price="itemInfo.price"
        :desc="itemInfo.detail"
        :title="itemInfo.title"
        class="goods-card"
        :thumb="itemInfo.picture"
      >
        <template #tags>
          <van-tag plain type="danger"
            >收货地址:{{ itemInfo.province }}{{ itemInfo.city
            }}{{ itemInfo.area }}{{ itemInfo.address }}</van-tag
          >
          <van-tag plain type="danger">收货人:{{ itemInfo.name }}</van-tag>
          <van-tag plain type="danger"
            >电话号码:{{ itemInfo.telephone }}</van-tag
          >
          <van-tag plain type="primary">是否发货:{{ isemit() }}</van-tag>
        </template>
      </van-card>
      <template #right>
        <van-button
          square
          text="发货"
          type="primary"
          class="delete-button"
          @click="emitshop()"
        />
      </template>
    </van-swipe-cell>
  </div>
</template>
<script>

export default {
  name: "ordermineListItem",
  components: {},
  data() {
    return {
      isexit: true,
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
  mounted() {
  },
  methods: {
    async remove() {
      try {
        await this.$http.delete("/order/remove/" + this.itemInfo.id);
        this.isexit = false;
        this.$message.success("删除成功");
      } catch (err) {
        this.$message.error("删除失败");
      }
    },
    async emitshop() {
      try{
        await this.$http.post('/order/updata/isemit/'+this.itemInfo.id);
        this.$bus.$emit('refreshemitshop')
        this.isexit = false;
        this.$message.success("发货成功");
        this.isexit = true;
      }catch (err) {
        this.$message.error("发货失败");
      }
    },
    isemit() {
      if(this.itemInfo.isemit=='1'){
        return '未发货'
      }else if(this.itemInfo.isemit=='2'){
        return '发货'
      }else{
        return '已完成'
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
</style>
