<template>
  <el-form :model="forms" :rules="rules" @validate="validate" ref="forms" label-width="80px">
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="forms.phone" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="forms.password" clearable></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="verifyPassword">
      <el-input v-model="forms.verifyPassword" clearable></el-input>
    </el-form-item>
    <el-form-item label="标签">
      <el-input v-model="forms.tag" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button :disabled="invalid" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    const validatePassword1 = (rule, value, callback) => {
      if (this.forms.verifyPassword !== '') {
        this.$refs.forms.validateField('verifyPassword');
        callback();
      }
    };
    const validatePassword2 = (rule, value, callback) => {
      if (this.forms.password !== '') {
        if (value !== this.forms.password) {
          callback(new Error('密码不一致'));
        } else {
          callback();
        }
      }
    };
    return {
      forms: {
        phone: '',
        password: '',
        verifyPassword: '',
        tag: ''
      },
      rules: {
        phone: [
          { required: true, message: '必填', trigger: 'blur' },
          { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '格式错误', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validatePassword1, trigger: ['blur', 'change'] }
        ],
        verifyPassword: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validatePassword2, trigger: ['blur', 'change'] }
        ]
      },
      invalid: true
    };
  },
  methods: {
    submit() {
      this.$refs.forms.validate(valid => {
        if (valid) {
          window.console.log('submit');
        }
      });
    },
    validate() {
      this.invalid = this.$refs.forms.fields.some(e => e.validateState !== 'success');
    }
  }
};
</script>

<style lang="less" scoped>
.el-form {
  width: 300px;
}
.el-form-item /deep/ .el-form-item__error {
  width: 200px;
  line-height: 32px;
  padding: 0 0 0 10px;
  top: 0;
  left: 100%;
}
</style>
