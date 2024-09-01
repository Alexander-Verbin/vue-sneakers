<template>
  <div class="container">
    <Header />
    <div class="content">
      <PageHead  title="Все кроссовки" :onChangeSelect="onChangeSelect"/>
      <CardList :items="items"/>
    </div>
  </div>
    <!--<Drawer />-->
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
  import axios from 'axios'

  import { CONSTANTS } from '@/assets/constants'

  import Header from "@/components/Header.vue";
  import CardList from "@/components/CardList.vue";
  import PageHead from "@/components/PageHead.vue";
  import Drawer from "@/components/Drawer.vue";

  const items = ref([]);
  const sortBy = ref("");
  const searchQuery = ref("");

  const onChangeSelect = event => {
    sortBy.value = event.target.value;
  }


  onMounted(async () => {

    try {
      const { data } = await axios.get(`${CONSTANTS.BASE_URL + CONSTANTS.ROUTE_ITEMS}`);

      items.value = data;
    }
    catch (error) {
      console.error(error);
    }

  })

  watch(sortBy, async () => {
    try {
      const { data } = await axios.get(`${CONSTANTS.BASE_URL + CONSTANTS.ROUTE_ITEMS}?sortBy=${sortBy.value}`);

      items.value = data;
    }
    catch (error) {
      console.error(error);
    }
  })
</script>
