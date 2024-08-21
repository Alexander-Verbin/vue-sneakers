<template>
  <div class="cart-item">
    <img class="cart-item__img" src="/sneakers/sneakers-1.jpg" :alt="title" />
    <div class="cart-item__info">
      <p class="cart-item__text">{{ title }} efvfev</p>
      <div class="cart-item__controls">
        <b>{{ price }} 123 &#8381;</b>
        <button type="button" class="cart-item__delete">
          <img src="/close.svg" alt="Delete">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    imgUrl: String,
    price: Number,
  })
</script>
