<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出路 品质靠谱">
    <ul class="goods-list">
      <li v-for="item in 4" :key="item">
        <RouterLink to="/">
          <img src="" alt="">
          <p class="name">name</p>
          <p class="price">&yen;200.00</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<script setup>

import HomePanel from "@/views/home/components/HomePanel.vue";
</script>

<style scoped lang="less">
// 鼠标经过上移阴影动画
.hoverShadow () {
  transition: all 0.5s;
  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }
}

.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }

    .price {
      color: #cf4444;
    }
  }
}
</style>