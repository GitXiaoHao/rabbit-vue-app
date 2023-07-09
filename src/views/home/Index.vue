<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
  </div>
  <HomeNew/>
  <HomeHot/>
  <HomeProduct/>
</template>

<script setup>

import HomeCategory from "@/views/home/components/HomeCategory.vue";
import HomeBanner from "@/views/home/components/HomeBanner.vue";
import HomeNew from "@/views/home/components/HomeNew.vue";
import HomeHot from "@/views/home/components/HomeHot.vue";
import HomeProduct from "@/views/home/components/HomeProduct.vue";
</script>

<style scoped lang="scss">

</style>