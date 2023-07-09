import {useMouseInElement} from "@vueuse/core";
import {ref,reactive,watch} from 'vue'
const usePreviewImg = () => {
    const target = ref(null)
    const show = ref(false)
    // elementX 鼠标基于容器左上角X轴偏移
    // elementY 鼠标基于容器左上角Y轴偏移
    // isOutside 鼠标是否在模板容器外
    const { elementX, elementY, isOutside } = useMouseInElement(target)
    const position = reactive({ left: 0, top: 0 })
    const bgPosition = reactive({ backgroundPositionX: 0, backgroundPositionY: 0 })
    watch([elementX, elementY, isOutside], () => {
        if(isOutside.value) return
        // 控制X轴方向的定位 0-200 之间
        if (elementX.value < 100) position.left = 0
        else if (elementX.value > 300) position.left = 200
        else position.left = elementX.value - 100
        // 控制Y轴方向的定位 0-200 之间
        if (elementY.value < 100) position.top = 0
        else if (elementY.value > 300) position.top = 200
        else position.top = elementY.value - 100
        // 设置大背景的定位
        bgPosition.backgroundPositionX = -position.left * 2 + 'px'
        bgPosition.backgroundPositionY = -position.top * 2 + 'px'
        // 设置遮罩容器的定位
        position.left = position.left + 'px'
        position.top = position.top + 'px'
        // 设置是否显示预览大图
        show.value = !isOutside.value
    })
    return { position, bgPosition, show, target }
}
export default usePreviewImg