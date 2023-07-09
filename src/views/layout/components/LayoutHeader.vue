<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/rabbit">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home" v-for="item in categoryList" :key="item.id">
          <router-link to="/">{{ item.name }}</router-link>
        </li>
      </ul>
<!--      <LayoutHeaderUl/>-->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->
      <!--      <HeaderCart/>-->
    </div>
  </header>
</template>

<script setup>

import LayoutHeaderUl from "@/views/layout/components/LayoutHeaderUl.vue";
import HeaderCart from "@/views/layout/components/HeaderCart.vue";
import {getCategoryApi} from "@/apis/layout.js";
import {onMounted, ref} from "vue";


const categoryList = ref([])
const getCategory = async () => {
  const res = await getCategoryApi();
  const result = res.data
  if (result.code === 200) {
    // appearMessage('')
    categoryList.value = result.data
  }
}
onMounted(() => {
  getCategory()
})
</script>
<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }


  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial, serif;
      }
    }
  }
}
</style>