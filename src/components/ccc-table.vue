<template>
  <div class="ccc-table">
    <el-table :data="sources" border stripe>
      <el-table-column v-for="c in this.options.columns" :key="c.prop" :prop="c.prop" :label="c.label" :resizable="false"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ccc-table',
  props: {
    options: {
      type: Object,
      required: true
    },
    sources: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
