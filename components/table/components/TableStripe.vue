<script setup>
import TableDemo from "./Table.vue"

const code = `
<template>
  <mu-table :data="tableData" stripe>
    <mu-table-column prop="date" label="Date" />
    <mu-table-column prop="name" label="Name" />
    <mu-table-column prop="address" label="Address" />
  </mu-table>
</template>
`
</script>

<template>
  <TableDemo stripe :code />
</template>

<style lang='scss' scoped>

</style>
