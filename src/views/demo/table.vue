<template>
  <div>
    <ccc-table :options="options" :sources="tableData"></ccc-table>
  </div>
</template>

<script>
import demoApi from '@/api/demo.js';
export default {
  data() {
    return {
      options: {},
      tableData: []
    };
  },
  created() {
    this.options = {
      columns: [
        {
          prop: 'name.first',
          label: 'name'
        },
        {
          prop: 'gender',
          label: 'gender'
        },
        {
          prop: 'dob.age',
          label: 'age'
        },
        {
          prop: 'location.country',
          label: 'country'
        },
        {
          prop: 'phone',
          label: 'phone'
        },
        {
          prop: 'email',
          label: 'email'
        }
      ]
    };
  },
  mounted() {
    demoApi.getRandomuserData(5).then(response => {
      this.tableData = response.data.results;
    });
  }
};
</script>
