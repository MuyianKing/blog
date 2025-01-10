<script setup>
import tableData from "../assets/data"

const code = `
<template>
  <mu-table :data="tableData" v-bind="$attrs" class="vp-raw">
    <mu-table-column>
      <template #header>
        <div style="color: aquamarine;">日期</div>
      </template>
      <template #default="{ row }">
        更新于{{ row.date }}
      </template>
    </mu-table-column>
    <mu-table-column prop="name" label="Name" />
    <mu-table-column prop="address" label="Address" />
  </mu-table>
</template>
`
</script>

<template>
  <code-preview :code>
    <mu-table :data="tableData" v-bind="$attrs" class="vp-raw">
      <mu-table-column>
        <template #header>
          <div style="color: aquamarine;">日期</div>
        </template>
        <template #default="{ row }">
          更新于{{ row.date }}
        </template>
      </mu-table-column>
      <mu-table-column prop="name" label="Name" />
      <mu-table-column prop="address" label="Address" />
    </mu-table>
  </code-preview>
</template>

<style lang='scss' scoped></style>
