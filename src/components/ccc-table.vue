<template>
  <div class="ccc-table">
    <el-table :data="sources" border stripe>
      <!-- columns -->
      <template v-for="c in options.columns">
        <el-table-column
          v-if="!c.type"
          :key="c.prop"
          :prop="c.prop"
          :label="c.label"
          :width="c.width"
          :formatter="c.formatter"
          :resizable="false"
        ></el-table-column>
        <el-table-column v-if="c.type === 'progress'" :key="c.prop" :label="c.label" :width="c.width" :resizable="false">
          <template slot-scope="scope">
            <el-progress :percentage="scope.row[c.prop]"></el-progress>
          </template>
        </el-table-column>
      </template>
      <!-- handle -->
      <el-table-column v-if="options.handle" :label="options.handle.label" :width="options.handle.width" :resizable="false">
        <template slot-scope="scope">
          <el-button type="text" v-for="b in options.handle.buttons" v-text="b.text" :key="b.text" @click="b.click(scope.row)"></el-button>
        </template>
      </el-table-column>
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
