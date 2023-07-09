<template>
  <div class="container">
    <div ref="target" class="middle">
      <img :src=imgSrc
           alt="item"/>
      <div class="layer" v-show="show" :style="position"></div>
    </div>
    <!--  放大镜大图-->
    <div class="large" :style="[{
    backgroundImage: `url(${imgSrc})`,
    backgroundPositionX: bgPosition.backgroundPositionX,
    backgroundPositionY: bgPosition.backgroundPositionY
  }]" v-show="show"></div>
  </div>

</template>

<script setup>
//获取鼠标相对位置
import useToggleImg from '@/utils/imageView.js'

const {position, bgPosition, show, target} = useToggleImg()
const imgSrc = "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-weeqzx.jpg?w=2560&h=1440&fmt=webp"

</script>

<style scoped lang="scss">
.container{
  display: flex;
}
.middle {
  width: 400px;
  height: 400px;
  position: relative;
  cursor: move;

  img {
    width: 400px;
    height: 400px;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, .2);
    left: 0;
    top: 0;
    position: absolute;
  }
}

.large {
  position: absolute;
  top: 0;
  left: 412px;
  width: 400px;
  height: 400px;
  z-index: 500;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  //背景图 盒子的大小 = 2: 1
  background-size: 800px 800px;
  background-color: #f8f8f8;
}
</style>