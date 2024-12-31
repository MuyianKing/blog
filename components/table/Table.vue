<script setup>
const data = ref([])
</script>

<template>
  <mu-table :data>
    <mu-table-column prop="index" label="序号" />
    <mu-table-column prop="xm" label="姓名" />
  </mu-table>
</template>

<style lang='scss' scoped>
:deep(table){
  display:table;
  margin:0;

  th{
    background-color: transparent !important;
    border:none;
  }

  td,tr{
    border: none;
  }
}

</style>
