// import { products } from "../data/products";

// Función asincrona para obtener los productos
export const getProducts = async () => {
  // Utilizando datos estaticos (requiere importar products)
  // return products;

  // ... o utilizando datos desde la API
  // Utiliza la función global fetch para realizar una petición de tipo GET a la URL
  const response = await fetch("http://localhost:8080/products");
  // Convierte la respuesta de los datos en formato JSON
  const products = await response.json();
  return products;
};

// Función para calcular el total
export const calculateTotal = (items) => {
  // Utiliza el metodo reduce para devolver un unico elemento del arreglo recibido como argumento
  return items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );
};
