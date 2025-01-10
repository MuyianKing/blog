<script setup>
import TableDemo from "./Table.vue"

const code = `
<template>
  <mu-table :data="tableData" stripe no-border>
    <mu-table-column prop="date" label="Date" />
    <mu-table-column prop="name" label="Name" />
    <mu-table-column prop="address" label="Address" />
  </mu-table>
</template>
`
</script>

<template>
  <table-demo stripe :code no-border />
</template>

<style lang='scss' scoped>

</style>
