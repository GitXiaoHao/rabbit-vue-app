<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-weeqzx.jpg?w=2560&h=1440&fmt=webp" alt="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .home-banner{
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;
    img{
      width: 100%;
      height: 500px;
    }
  }
</style>