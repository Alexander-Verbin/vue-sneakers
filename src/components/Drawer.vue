<template>
  <div class="drawer-bg">
  </div>
  <div class="drawer-cart">
    <DrawerHeader />
    <CartItemList />

    <div class="drawer-cart__footer drawer-cart-footer">
      <div class="drawer-cart-footer__item drawer-cart-footer-item">
        <span>Итого:</span>
        <div class="drawer-cart-footer-item__dots"></div>
        <b>123 &#8381;</b>
      </div>
      <div class="drawer-cart-footer__item drawer-cart-footer-item">
        <span>Налог 5%</span>
        <div class="drawer-cart-footer-item__dots"></div>
        <b>123 &#8381;</b>
      </div>

      <button class="drawer-cart-footer__btn">
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script setup>
  import DrawerHeader from "@/components/DrawerHeader.vue";
  import CartItemList from "@/components/CartItemList.vue";
</script>
