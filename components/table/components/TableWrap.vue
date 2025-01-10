<script setup>
import tableData from "../assets/data"

const nowrap = ref(false)

const code = `
<template>
  <mu-table :data="tableData" nowrap>
    <mu-table-column prop="date" label="Date" />
    <mu-table-column prop="name" label="Name" />
    <mu-table-column prop="address" label="Address" >
  </mu-table>
</template>
`
</script>

<template>
  <code-preview :code>
    <el-switch v-model="nowrap" size="large" active-text="一行" inactive-text="多行" />
    <mu-table :data="tableData" class="vp-raw" :nowrap>
      <mu-table-column prop="date" label="Date" min-width="120" />
      <mu-table-column prop="name" label="Name" />
      <mu-table-column label="Address">
        <template #default="{ row }">
        {{row.address}}{{row.address}}{{row.address}}
        </template>
      </mu-table-column>
    </mu-table>
  </code-preview>
</template>

<style lang='scss' scoped></style>
