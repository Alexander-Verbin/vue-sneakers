<template>
  <div class="drawer-bg">
  </div>
  <div class="drawer-cart">
    <DrawerHeader />
    <CartItemList />
  </div>
</template>

<script setup>
  import DrawerHeader from "@/components/DrawerHeader.vue";
  import CartItemList from "@/components/CartItemList.vue";
</script>
