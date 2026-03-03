
import { findInvoiceById } from './data/invoices';

// Llamada a la funcion findInvoiceById, que retorna una promesa
// Se concatenan los métodos then y catch a la promesa, ambos contienen una funcion callback con 1 parametro
// - then: para manejar el resultado de la promesa
// - catch: para manejar el error de la promesa
findInvoiceById(3)
    .then(result => console.log(result))
    .catch(error => console.error(error));