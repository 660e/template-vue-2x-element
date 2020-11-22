<template>
  <el-form label-width="80px">
    <el-form-item label="参数A">
      <el-input v-model="form.a" clearable></el-input>
    </el-form-item>
    <el-form-item label="参数B">
      <el-input v-model="form.b" clearable></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        a: '',
        b: ''
      }
    };
  }
};
</script>

<style lang="less" scoped>
.el-form {
  width: 300px;
}
</style>