<template>
  <div :class="['toggle-buttons', isMobile ? 'flex-col' : 'flex-row']">
    <button
      v-for="option in options"
      :key="option.id"
      :class="['toggle-button', { active: option.id === selectedItem }]"
      @click="() => emit('change', option.id)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  options: { id: string; label: string }[];
  selectedItem: string;
}>();

const emit = defineEmits<{
  change: [id: string];
}>();

const { $viewport } = useNuxtApp();
const isMobile = computed(() => $viewport.breakpoint.value.includes("mobile"));
</script>

<style scoped>
.toggle-buttons {
  display: flex;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  gap: 0.5rem;
}

.toggle-button {
  padding: 10px 20px;
  border-radius: 0.5rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
}

.toggle-button.active {
  background-color: #fff;
}

.toggle-button:not(.active):hover {
  background-color: #f1f1f1;
}
</style>
