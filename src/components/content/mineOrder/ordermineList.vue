<template>
  <div class="cart">
      <ordermineListItem v-for="(item,index) in list"
                    :key="index"
                    :item-info="item">{{item}}>
      </ordermineListItem>
  </div>
</template>

<script>

import ordermineListItem from "./ordermineListItem";



export default {
  name: "ordermineList",
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
</style>
