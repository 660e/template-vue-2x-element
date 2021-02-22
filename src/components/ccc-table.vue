<template>
  <div class="ccc-table">
    <el-table :data="sources" border stripe>
      <template v-for="c in this.options.columns">
        <el-table-column :key="c.prop" :label="c.label" :width="c.width" :resizable="false" v-if="!c.type" :prop="c.prop"></el-table-column>
        <el-table-column :key="c.prop" :label="c.label" :width="c.width" :resizable="false" v-if="c.type === 'progress'">
          <template slot-scope="scope">
            <el-progress :percentage="scope.row[c.prop]"></el-progress>
          </template>
        </el-table-column>
      </template>
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
