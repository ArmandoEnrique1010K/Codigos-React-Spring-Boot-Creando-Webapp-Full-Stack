// import { products } from "../data/products";

// Función asincrona para obtener los productos
export const getProducts = async () => {
  // Utilizando datos estaticos (requiere importar products)
  // return products;

  // ... o utilizando datos desde la API
  const response = await fetch("http://localhost:8080/products");
  const products = await response.json();
  return products;
};

export const calculateTotal = (items) => {
  return items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );
};
