<template>
  <div class="search-input">
    <span class="icon search-icon">
      <LucideSearch :size="18" />
    </span>
    <input
      type="text"
      v-model="query"
      placeholder="Search..."
      @input="emit('input', query)"
      @keyup.enter="emit('search', query)"
    />
    <span class="icon clear-icon" v-if="query" @click="clearSearch">
      <LucideX :size="18" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const query = ref("");

const emit = defineEmits<{
  input: [string];
  search: [string];
}>();

const clearSearch = () => {
  query.value = "";
  emit("input", query.value);
};
</script>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.5rem;
  max-width: 250px;
  position: relative;
}

input {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 16px;
}

.icon {
  cursor: pointer;
  font-size: 18px;
}

.search-icon {
  margin: 0 0.5rem;
}

.clear-icon {
  position: absolute;
  right: 1rem;
  font-size: 16px;
}
</style>
