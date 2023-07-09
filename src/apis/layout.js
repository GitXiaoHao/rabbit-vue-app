import httpInstance from "@/utils/http.js";

export function getCategoryApi(){
    return httpInstance({
        url: '/home/category',
        method: 'get'
    })
}
export function addCategoryApi(rabbitCategory){
    return httpInstance({
        data: rabbitCategory,
        url: '/home/category',
        method: "post",
    })
}