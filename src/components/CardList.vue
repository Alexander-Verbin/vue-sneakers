<template>
  <div class="card-list">
    <Card
        title="title"
        imgUrl="/sneakers/sneakers-1.jpg"
        :price="1205"
        :isAdded="false"
        :isFavorite="true"
    />
  </div>
</template>

<script setup>
  import Card from "@/components/Card.vue";

  const onClickAdd = () => {}
  const onClickFavorite = () => {}
</script>
