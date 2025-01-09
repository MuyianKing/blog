<script setup>
import tableData from "../assets/data"

defineProps({
  code: {
    type: String,
    default: `
<template>
  <mu-table :data="tableData">
    <mu-table-column prop="date" label="Date" />
    <mu-table-column prop="name" label="Name" />
    <mu-table-column prop="address" label="Address" />
  </mu-table>
</template>
`
  }
})
</script>

<template>
  <code-preview :code>
    <mu-table :data="tableData" v-bind="$attrs">
      <mu-table-column prop="date" label="Date" />
      <mu-table-column prop="name" label="Name" />
      <mu-table-column prop="address" label="Address" />
    </mu-table>
  </code-preview>
</template>

<style lang='scss' scoped>
:deep(table) {
  display: table;
  margin: 0;

  th {
    background-color: transparent !important;
    border: none;
  }

  td,
  tr {
    border: none;
  }
}
</style>
