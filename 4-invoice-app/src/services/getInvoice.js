// Importa el objeto invoice (dato estático)
import { invoice } from "../data/invoice";

// Función para obtener la factura
export const getInvoice = () => {
  // console.log(invoice);

  // Puedes utilizar un forEach para calcular el total de la factura
  // let total = 0;
  // invoice.items.forEach(item => {
  //     total = total + item.price * item.quantity;
  // });

  // En este caso se realiza una llamada a una función calculateTotal, pasando los items del objeto invoice
  const total = calculateTotal(invoice.items);

  // Devuelve un objeto que contiene las propiedades del objeto invoice y la propiedad total con su valor (total: total)
  return { ...invoice, total };
};

// Función para calcular el total de la factura, requiere un argumento de tipo arreglo
export const calculateTotal = (items = []) => {
  return (
    // Para optimizar el calculo del total, se realiza lo siguiente con el argumento recibido
    items
      // Devuelve un nuevo arreglo, cuyos elementos es la multiplicacion del precio por la cantidad
      .map((item) => item.price * item.quantity)
      // Reduce sirve para realizar una operación con cada elemento del arreglo,
      .reduce(
        // El primer argumento es una función
        (accumulator, currentValue) =>
          // Suma cada elemento (currentValue) y lo añade al nuevo total (accumulator)
          accumulator + currentValue,
        // El segundo argumento es el valor inicial del accumulator
        0
      )
  );
};
