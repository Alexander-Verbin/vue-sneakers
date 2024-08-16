<template>
  <div class="container">
    <Header />
    <div class="content">
      <h1 class="page-title">Все кроссовки</h1>
      <CardList />
    </div>
  </div>
  <Drawer />
</template>

<script setup>
  import Header from "@/components/Header.vue";
  import CardList from "@/components/CardList.vue";
  import Drawer from "@/components/Drawer.vue";
</script>
