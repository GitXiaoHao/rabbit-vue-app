import {ElMessage} from "element-plus";

export function appearMessage(msg, type){
    ElMessage({
        message: msg,
        type: type,
    })
}