<template>
  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader/>
<!--  二级路由出口-->
  <router-view/>
  <LayoutFooter/>
</template>

<script setup>

import LayoutNav from "@/views/layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/layout/components/LayoutFooter.vue";
import LayoutFixed from "@/views/layout/components/LayoutFixed.vue";
import {useCategoryStore} from "@/store/category.js";
import {onMounted} from "vue";
//触发获取导航列表的action
const categoryStore = useCategoryStore();
onMounted(() => categoryStore.getCategory())
</script>

<style scoped>

</style>