import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "../reducer/itemsActions";

// Valor inicial para el state del carrito, utiliza JSON.parse para convertir un string a un objeto

// sessionStorage.getItem sirve para obtener el valor del key. Un arreglo tambien es un objeto en javascript

// Si no existe el key "cart" en el sessionStorage (almacenamiento hasta cerrar la pestaña o ventana) del navegador, establece un arreglo vacio

// Recuerda que se utiliza un condicional simplificado con ||
const inititalCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

// Hook personalizado useItemsCart, encapsula toda la parte logica JavaScript del carrito de compras
export const useItemsCart = () => {
  // State con useReducer para los productos almacenados en el carrito, requiere la función itemsReducer y el valor inicial
  const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems);

  // Efecto secundario que depende de cartItems,
  useEffect(() => {
    // sessionStorage.setItem sirve para almacenar la información en el navegador, requiere un key ("cart") y un string para el valor

    // Como cartItems es un arreglo, se convierte a string con JSON.stringify
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Función auxiliar para agregar un producto al carrito, requiere un objeto como argumento
  const handlerAddProductCart = (product) => {
    // Verifica si el producto ya se encuentra en el carrito segun su ID
    const hasItem = cartItems.find((i) => i.product.id === product.id);

    // Si el producto existe
    if (hasItem) {
      // Lanza o ejecuta el siguiente dispatch, para actualizar la cantidad del producto
      dispatch({
        // Observa que se utiliza el nombre de la constante importada desde itemsActions, normalmente espera un string como el type definido en itemsReducer
        type: UpdateQuantityProductCart,

        // Pasa el objeto como payload
        payload: product,
      });
    } else {
      // Si el producto no existe, solamente lo agrega
      dispatch({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  // Función auxiliar para eliminar el producto por su ID
  const handlerDeleteProductCart = (id) => {
    dispatch({
      type: DeleteProductCart,
      // Como payload, se pasa el id (number)
      payload: id,
    });
  };

  // En el return se coloca en un objeto todo lo necesario que se utilizará en los componentes de tipo vista
  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCart,
  };
};
