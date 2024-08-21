<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="page-head">
        <h1 class="page-head__title">Все кроссовки</h1>
        <div class="">
          <input type="search" placeholder="Поиск" class="page-head__input">
        </div>
      </div>
      <CardList />
    </div>
  </div>
<!--  <Drawer />-->
</template>

<script setup>
  import Header from "@/components/Header.vue";
  import CardList from "@/components/CardList.vue";
  import Drawer from "@/components/Drawer.vue";
</script>
