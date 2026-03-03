import { invoice } from "../data/invoice"

// Función que calcula el total de la factura
export const getInvoice = () => {

  // console.log(invoice);

  // let total = 0;
  // invoice.items.forEach(item => {
  //     total = total + item.price * item.quantity;
  // });

  // Calcula el total de la factura (toma el arreglo de items del objeto invoice)
  const total = calculateTotal(invoice.items)

  // Retorna un nuevo objeto con el objeto invoice y el total
  return { ...invoice, total };
}

// Función auxiliar para calcular el total de la factura
export const calculateTotal = (items = []) => {
  return items
    // El método map retorna un nuevo arreglo con los resultados de la operación
    .map(item => item.price * item.quantity)
    // El método reduce retorna un solo valor, en este caso la suma de todos los elementos del arreglo
    // LLeva una función callback que toma dos parámetros: el acumulador y el valor actual
    // Y lleva el valor inicial del acumuladorcomo 0
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}