<template>
  <div class="page-head">
    <h1 class="page-head__title">{{ title }}</h1>
    <div class="page-head__controls">
      <select @change="onChangeSelect" class="page-head__select">
        <option :value="CONSTANTS.SELECT_VALUE_NAME">
          По названию
        </option>
        <option :value="CONSTANTS.SELECT_VALUE_PRICE_UP">
          По цене (Дешевле)
        </option>
        <option :value="CONSTANTS.SELECT_VALUE_PRICE_DOWN">
          По цене (Дороже)
        </option>
      </select>
      <div class="page-head__search">
        <svg class="page-head__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <input type="search" placeholder="Поиск" class="page-head__input">
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    onChangeSelect: Function,
  })

  import { CONSTANTS } from '@/assets/constants/index.js'
</script>
