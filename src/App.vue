<template>
  <div class="container">
    <Header />
    <div class="content">
      <h1 class="page-title">Все кроссовки</h1>
      <div class="wrapper">
        <Card />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Header from "@/components/Header.vue";
  import Card from "@/components/Card.vue";
</script>
