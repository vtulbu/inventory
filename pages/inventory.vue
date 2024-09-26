<template>
  <h1 class="text-6xl mb-10 mt-16">Your Inventory</h1>
  <ToggleButtons
    :options="[
      { id: 'all', label: 'All categories' },
      { id: '1', label: 'Category 1' },
      { id: '2', label: 'Category 2' },
      { id: '3', label: 'Category 3' },
      { id: '4', label: 'Category 4' },
      { id: '5', label: 'Category 5' },
      { id: '6', label: 'Category 6' },
    ]"
    :selectedItem="selectedFilter"
    @change="(id) => (selectedFilter = id)"
  />
</template>

<script setup>
const selectedFilter = ref("all");
</script>
