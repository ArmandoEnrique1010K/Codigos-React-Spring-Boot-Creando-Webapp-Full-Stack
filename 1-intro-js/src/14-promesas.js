// PROMESA ASINCRONA

// Importa la función findInvoiceById
import { findInvoiceById } from "./data/invoices";

// Pasale un argumento a la función asincrona findInvoiceById y como retorna una promesa, se encadena los metodos then y catch para imprimir el resultado de la promesa
findInvoiceById(3).then(console.log).catch(console.error);
