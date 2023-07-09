import { defineStore } from 'pinia'
import {ref} from "vue";
import {getCategoryApi} from "@/apis/layout.js";
export const useCategoryStore = defineStore('category', () =>{
    //导航的数据管理
    const categoryList = ref([])
    const getCategory = async () => {
        const res = await getCategoryApi();
        const result = res.data
        if (result.code === 200) {
            // appearMessage('')
            categoryList.value = result.data
        }
    }
    return {
        categoryList,
        getCategory
    }
})