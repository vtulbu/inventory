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
    :selectedItem="route.query.category || 'all'"
    @change="(id) => router.push({ query: { category: id } })"
  />
  <div class="mt-10">
    <FilterInventory @search="searchFilter = $event" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
    <div
      v-for="product in data.products.filter((product) => {
        if (route.query.category === 'all') {
          return product.name
            .toLowerCase()
            .includes(searchFilter.toLowerCase());
        } else {
          return (
            product.name.toLowerCase().includes(searchFilter.toLowerCase()) &&
            product.category === Number(route.query.category)
          );
        }
      })"
      :key="product.id"
    >
      <Cart
        :product="product"
        @addToCart="
          (e) =>
            addProduct({
              id: product.id,
              quantity: e.quantity,
              totalPrice: product.price * e.quantity,
            })
        "
        :quantity="
          shoppingList.find((item) => item.id === product.id)?.quantity || 0
        "
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const { data } = await useFetch("/api/inventory");

const searchFilter = ref("");
const { addProduct, shoppingList } = useShoppingList();

console.log("data", data.value);
</script>
