
// La carpeta 'services' contiene funciones que realizan operaciones como manipular los datos
import { invoice } from "../data/invoice"

// Función para obtener la factura y el total a pagar de la factura
export const getInvoice = () => {

  // Forma tradicional de calcular el total
  // let total = 0;
  // invoice.items.forEach(item => {
  //     total = total + item.price * item.quantity;
  // });

  // Forma moderna de calcular el total
  // Calcula el total de la factura (toma el arreglo de items del objeto invoice)
  const total = calculateTotal(invoice.items)

  // Retorna un nuevo objeto que tiene las propiedades del objeto invoice y el total
  return { ...invoice, total };
}

// Función auxiliar para calcular el total a pagar de la factura
export const calculateTotal = (items = []) => {
  return items
    // El método map retorna un nuevo arreglo con los resultados de la operación
    .map(item => item.price * item.quantity)

    // El método reduce sirve para transformar un arreglo en un solo valor acumulando 
    // los resultados de la operación, en este caso la suma de todos los elementos del arreglo
    // LLeva como parámetro una función callback y el valor inicial del acumulador
    // - La función callback toma dos parámetros: el acumulador y el valor actual
    // - El valor inicial del acumulador es 0
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}