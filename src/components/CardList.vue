<template>
  <div class="card-list">
    <Card
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isAdded="false"
      :isFavorite="true"
    />
  </div>
</template>

<script setup>
  import Card from "@/components/Card.vue";

  const onClickAdd = () => {}
  const onClickFavorite = () => {}

  defineProps({
    items: Array
  })
</script>
