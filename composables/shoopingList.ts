import { ref } from "vue";

interface Product {
  id: number;
  quantity: number;
  totalPrice: number;
}

export function useShoppingList() {
  const shoppingList = ref<Product[]>([]);

  const addProduct = (product: Product) => {
    const existingProduct = shoppingList.value.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = product.quantity;
      existingProduct.totalPrice = product.totalPrice;
      return;
    }
    shoppingList.value.push(product);
  };

  const removeProduct = (productId: number) => {
    shoppingList.value = shoppingList.value.filter(
      (product) => product.id !== productId
    );
  };

  const updateProduct = (
    productId: number,
    quantity: number,
    totalPrice: number
  ) => {
    const product = shoppingList.value.find(
      (product) => product.id === productId
    );
    if (product) {
      product.quantity = quantity;
      product.totalPrice = totalPrice;
    }
  };

  return {
    shoppingList,
    addProduct,
    removeProduct,
    updateProduct,
  };
}
