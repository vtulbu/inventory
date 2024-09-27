<template>
  <div class="product-cart">
    <div class="flex gap-4">
      <div
        class="flex items-center justify-center min-h-16 min-w-16 rounded-2xl"
        :class="{ 'bg-gray-200': !isImageLoaded }"
      >
        <LucideImage v-if="!isImageLoaded" :size="30" />
        <img
          :src="product.image"
          alt="Product Image"
          class="product-image"
          @load="isImageLoaded = true"
          :class="{ hidden: !isImageLoaded }"
        />
      </div>
      <div class="flex flex-col gap-4">
        <p>Category {{ product.category }}</p>
        <p>
          {{ product.name }}
        </p>
        <p>
          {{ product.brand }}
        </p>
      </div>
    </div>
    <p
      class="p-2 rounded-md flex-1"
      :class="{
        'bg-red-400': product.stock < 5,
        'bg-yellow-400': product.stock < 20 && product.stock >= 5,
        'bg-green-400': product.stock >= 20,
      }"
    >
      {{ product.stock }} in stock
    </p>

    <div class="flex items-center justify-between gap-4">
      <div class="flex-1">
        <p>Unit cost</p>
        <p>${{ product.price }}</p>
      </div>
      <div class="flex-1">
        <p>Unit</p>
        <p>{{ product.unit }}</p>
      </div>
    </div>
    <div class="flex gap-6">
      <ItemsCounter
        :count="refQuantity"
        @decrease="refQuantity--"
        @increase="refQuantity++"
        :max="product.stock"
      />

      <button
        class="add-to-cart bg-red-400 rounded-lg"
        :class="{
          'cursor-not-allowed opacity-50 bg-gray-200': refQuantity === 0,
        }"
        @click="
          emit('addToCart', { productId: product.id, quantity: refQuantity })
        "
      >
        <LucideShoppingCart :size="18" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
    unit: string;
    brand: string;
    category: number;
  };
  quantity: number;
}>();

const emit = defineEmits<{
  addToCart: [cartItem: { productId: number; quantity: number }];
}>();

const isImageLoaded = ref(false);
const refQuantity = ref(props.quantity);
</script>

<style scoped>
.product-cart {
  border: 1px solid #ddd;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 260px;
  border-radius: 1rem;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 16px;
}

.product-details {
  flex-grow: 1;
}

.quantity-control {
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity-button {
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
}

.add-to-cart {
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
}
</style>
