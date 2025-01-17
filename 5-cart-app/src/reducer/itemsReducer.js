// Importa las constantes definidas en itemsActions
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "./itemsActions";

// Función de tipo reducer, normalmente se establece en el state el tipo de dato y en action se establece un objeto que contiene un type para el tipo de acción y el payload, el contenido que se recibe
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
        // i representa cada elemento de state

        // Si el id del producto es igual al id que se recibe del payload (un objeto product)
        if (i.product.id === action.payload.id) {
          return {
            // Devuelve una copia de las propiedades del state e incrementa la cantidad en 1
            ...i,
            quantity: i.quantity + 1,
          };
        }

        // Los demás items quedan tal y como estan (intactos)
        return i;
      });

    // Caso para eliminar un producto del carrito
    case DeleteProductCart:
      // Excluye del arreglo el elemento cuyo id coincide con el que se recibe desde el payload (el id numerico)
      return state.filter((i) => i.product.id !== action.payload);

    // Normalmente se define lo siguiente, en el caso de que el type sea cualquier otra acción que no coincida con las que fuerón definidas anteriormente (no se llega a utilizar)
    default:
      return state;
  }
};
