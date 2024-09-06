<template>
  <div class="container">
    <Header />
    <div class="content">
      <PageHead  title="Все кроссовки" :onChangeFilters="onChangeFilters"/>
      <CardList :items="items"/>
    </div>
  </div>
    <!--<Drawer />-->
</template>

<script setup>
  import { onMounted, reactive, ref, watch } from 'vue'

  import { fetchItems } from '@/assets/constants'

  import Header from "@/components/Header.vue";
  import CardList from "@/components/CardList.vue";
  import PageHead from "@/components/PageHead.vue";
  import Drawer from "@/components/Drawer.vue";

  const items = ref([]);
  const filters = reactive({
    sortBy: "title",
    searchQuery: "",
  })

  const onChangeFilters = {
    Select: function(event) {
      filters.sortBy = event.target.value;
    },
    Input: function(event) {
      filters.searchQuery = event.target.value;
    }
  }


  onMounted(() => {
    fetchItems(items, filters)
  });

  watch(filters,() => {
    fetchItems(items, filters)
  });
</script>
