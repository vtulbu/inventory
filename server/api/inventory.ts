export default defineEventHandler((event) => {
  const products: {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
    unit: string;
    brand: string;
    category: number;
  }[] = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 1000),
    stock: Math.floor(Math.random() * 50),
    image: "https://via.placeholder.com/100",
    unit: "unit",
    brand: `Brand ${index + 1}`,
    category: Math.floor(Math.random() * 7),
  }));

  return {
    products,
  };
});
