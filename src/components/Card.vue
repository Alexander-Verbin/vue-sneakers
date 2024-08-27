<template>
  <div class="card">
    <button
        class="card__favorite"
        type="button"
        @click="onClickAdd"
    >
      <img :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Like" />
    </button>
    <img :src="imageUrl" :alt="title" />
    <p class="card__title">{{ title }}</p>
    <div class="card__footer card-footer">
      <div class="card-footer__block">
        <span class="card-footer__text">Цена:</span>
        <b>{{ price }} &#8381;</b>
      </div>
      <button
          type="button"
          @click="onClickFavorite"
      >
        <img :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Add">
      </button>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    imageUrl: String,
    price: Number,
    isFavorite: Boolean,
    isAdded: Boolean,
    onClickAdd: Function,
    onClickFavorite: Function,
  })
</script>
