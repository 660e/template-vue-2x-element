<template>
  <el-dialog :visible.sync="dialogVisible" :close-on-click-modal="false" title="弹窗" width="300px">
    <el-input v-model="input"></el-input>
    <div slot="footer">
      <el-button @click="close">取消</el-button>
      <el-button @click="ok" type="primary">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      input: ''
    };
  },
  created() {
    window.console.log('created');
  },
  mounted() {
    window.console.log('mounted');
  },
  updated() {
    window.console.log('updated');
  },
  destroyed() {
    window.console.log('destroyed');
  },
  methods: {
    open(params) {
      this.dialogVisible = true;
      window.console.log(params);
    },
    close() {
      this.dialogVisible = false;
    },
    ok() {
      this.close();
      this.$emit('confirm', { b: this.input });
    }
  }
};
</script>
