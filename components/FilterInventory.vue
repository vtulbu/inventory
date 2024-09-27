<template>
  <SearchInput @search="emit('search', $event)" />
</template>

<script setup lang="ts">
const emit = defineEmits<{ search: [string] }>();
</script>
