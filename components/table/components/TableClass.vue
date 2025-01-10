<script setup>
import TableDemo from "./Table.vue"

function createRowClass(row) {
  return row.index % 2 === 0 ? 'purple' : 'green'
}

const code = `
<script setup>
function createRowClass(row) {
  return row.index % 2 === 0 ? 'purple' : 'green' 
}
<\/script>
<template>
  <mu-table :data="tableData" :row-class="createRowClass">
    <mu-table-column prop="date" label="Date" />
    <mu-table-column prop="name" label="Name" />
    <mu-table-column prop="address" label="Address" />
  </mu-table>
</template>
<style>
.purple {
  background-color: #fdf6ec;
}
.green {
  background-color: #f0f9eb;
}
</style>
`
</script>

<template>
  <table-demo :code :row-class="createRowClass" />
</template>

<style lang='scss' scoped>
:deep(.mu-table) {
  .purple {
    background-color: #fdf6ec;
  }

  .green {
    background-color: #f0f9eb;
  }
}
</style>
