// Importa las constantes definidas en itemsActions
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "./itemsActions";

// Función de tipo reducer, normalmente se establece en el state el tipo de dato
export const itemsReducer = (state = [], action) => {
  // Utiliza una sentencia switch para definir cada una de las acciones
  switch (action.type) {
    // Una buena practica es utilizar constantes para definir el tipo de acción en lugar de un string

    // Caso para añadir un producto al carrito
    case AddProductCart:
      return [
        // Toma una copia del state que se tiene hasta el momento
        ...state,
        {
          // Establece el payload que se recibe como el valor de la propiedad product
          product: action.payload,
          // Establece la cantidad en 1
          quantity: 1,
        },
      ];
    case UpdateQuantityProductCart:
      // Conviene utilizar el metodo map que un metodo filter, porque filter modifica el orden de los elementos, posicionando el elemento modificado como el primero de la lista

      // Itera con el valor de state cada item (el valor inicial) con el metodo map
      return state.map((i) => {
        // Si el id del producto es igual al id que se recibe del payload (un objeto product)
        if (i.product.id === action.payload.id) {
          return {
            // Devuelve una copia de las propiedades del state e incrementa la cantidad en 1
            ...i,
            quantity: i.quantity + 1,
          };
        }

        // Los demás items quedan tal y como estan
        return i;
      });

    // Caso para eliminar un producto del carrito
    case DeleteProductCart:
      return state.filter((i) => i.product.id !== action.payload);

    default:
      return state;
  }
};
