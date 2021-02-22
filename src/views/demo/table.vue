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
          prop: 'name',
          label: 'name',
          width: 200
        },
        {
          prop: 'gender',
          label: 'gender',
          width: 200
        },
        {
          prop: 'country',
          label: 'country',
          width: 200
        },
        {
          prop: 'phone',
          label: 'phone',
          width: 200
        },
        {
          prop: 'email',
          label: 'email'
        },
        {
          prop: 'progress',
          label: 'progress',
          width: 200,
          type: 'progress'
        }
      ]
    };
  },
  mounted() {
    demoApi.getRandomuserData(10).then(response => {
      this.tableData = response.data.results.map(e => {
        return {
          name: `${e.name.first} ${e.name.last}`,
          gender: e.gender,
          country: e.location.country,
          phone: e.phone,
          email: e.email,
          progress: e.dob.age
        };
      });
    });
  }
};
</script>
