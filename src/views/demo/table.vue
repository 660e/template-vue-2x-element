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
          width: 200,
          formatter: (row, column, cellValue) => {
            switch (cellValue) {
              case 'male':
                return 1;
              case 'female':
                return 0;
            }
          }
        },
        {
          type: 'progress',
          prop: 'progress',
          label: 'progress',
          width: 200
        },
        {
          prop: 'country',
          label: 'country',
          width: 200
        },
        {
          prop: 'date',
          label: 'date',
          width: 200
        },
        {
          prop: 'email',
          label: 'email'
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
          progress: e.dob.age,
          country: e.location.country,
          date: e.dob.date.slice(0, 19).replace(/T/, ' '),
          email: e.email
        };
      });
    });
  }
};
</script>
