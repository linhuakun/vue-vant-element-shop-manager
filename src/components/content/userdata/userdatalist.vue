<template>
  <div class="cart">
      <ordermineListItem v-for="(item,index) in list"
                    :key="index"
                    :item-info="item">{{item}}>
      </ordermineListItem>
  </div>
</template>

<script>

import ordermineListItem from "./userdatalistItem";



export default {
  name: "userdatalist",
  components: {
    ordermineListItem
  },
  props:{
      list:{
          type:Array,
            defalut(){
                return []
            }
        }
      }
  }
</script>

<style scoped>
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>