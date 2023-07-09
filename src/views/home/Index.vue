<template>
  <h2>Home</h2>
  <el-form
      ref="ruleFormRef"
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
  >
    <el-form-item label="Name">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Activity description">
      <el-input v-model="formLabelAlign.description" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {addCategoryApi} from "@/apis/layout.js";
const labelPosition = ref('right')
const ruleFormRef = ref(null)
const formLabelAlign = reactive({
  name: '',
  description: '',
})
const addCategory = async () => {
  const res = await addCategoryApi(formLabelAlign);
  console.log(res)
  // resetForm(ruleFormRef)
}

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      addCategory()
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  console.log(formEl)
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">

</style>