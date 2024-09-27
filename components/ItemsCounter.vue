<template>
  <div class="flex gap-4 border rounded-md justify-center items-center">
    <button
      @click="emit('decrease')"
      :disabled="count === 0"
      class="border-r-[1px]"
    >
      -
    </button>

    <span class="w-8 text-center">{{ count }}</span>
    <button
      @click="emit('increase')"
      class="border-l-[1px]"
      :disabled="count >= max"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number;
  max: number;
}>();

const emit = defineEmits<{
  decrease: [];
  increase: [];
}>();
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  transition: all 0.3s;
}

button:disabled {
  opacity: 0.5;
}

button:hover {
  background-color: #f3f4f6;
}

span {
  font-size: 18px;
}
</style>
