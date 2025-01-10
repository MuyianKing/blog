<script setup>
import tableData from "../assets/data"
import TableDemo from "./Table.vue"

const code = `
<template>
  <mu-table :data="tableData" max-height="200">
    <mu-table-column prop="date" label="Date" />
    <mu-table-column prop="name" label="Name" />
    <mu-table-column prop="address" label="Address" >
  </mu-table>
</template>
`
</script>

<template>
  <table-demo :code :data="[...tableData, ...tableData, ...tableData]" max-height="200" />
</template>

<style lang='scss' scoped></style>
