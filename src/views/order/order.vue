<template>
  <div class="order">
    <NavBar class="nav-bar">
      <div slot="center">订单管理</div>
      <div slot="right" @click="downinfo"><img src="@/assets/img/order/downicon.svg" alt=""></div>
    </NavBar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
      @pullingDown="pullingDown"
    >
      <OrderMineList :list="list" v-if="this.isexit"></OrderMineList>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import scroll from "@/components/common/Scroll/Scroll";
import OrderMineList from "@/components/content/mineOrder/ordermineList";
import { getAllorder } from "@/network/order.js";
import {exportCSV} from './csv.js'

export default {
  name: "order",
  components: {
    NavBar,
    scroll,
    OrderMineList
  },
  data() {
    return {
      list: [],
      isexit:true,
      mainTitle : [
            '姓名',
            '电话',
            '商品名称',
            '商品描述',
            '商品价格',
            '商品数量',
            '省份',
            '市区',
            '县级',
            '地址',
            '货物状态',
            '创建时间',
            '变更时间'
        ],
        mainTitleForKey:[
            'name',
            'telephone',
            'title',
            'detail',
            'price',
            'count',
            'province',
            'city',
            'area',
            'address',
            'isemit',
            'createAt',
            'updateAt'
        ]
    };
  },
  created() {
    this.getAllorderdata()
  },
  mounted() {
    this.$bus.$on('refreshemitshop',this.isrefresh)
  },
  methods: {
    isrefresh(){
      this.isexit=false;
      this.getAllorderdata();
      this.isexit=true;
    },
    async getAllorderdata(){
       const res=await getAllorder();
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
    },
    downinfo(){
       exportCSV(this.list, this.mainTitle, this.mainTitleForKey, '订单数据');
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

.nav-bar img{
  margin-left:-20px ;
  position: absolute;
  top:50%;
  transform: translate(0,-50%);
}
</style>
