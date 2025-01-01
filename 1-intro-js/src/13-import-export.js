// IMPORTAR Y EXPORTAR UN MODULO

// En JavaScript, un módulo es una unidad de código que organiza y agrupa funcionalidades relacionadas. Los módulos permiten dividir el código en partes más pequeñas y manejables, facilitando su mantenimiento y reutilización en proyectos grandes. Un módulo puede contener variables, funciones, clases y otros módulos.

// En este caso, se ha definido un modulo llamado invoices.js (se encuentra en la carpeta data)

// Importa los módulos invoices (por defecto), invoiceByClientName y paper desde el archivo invoices.js
import invoices, { invoiceByClientName, papper } from "./data/invoices";

const invoicesName = invoices.map((i) => i.name);
console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map((i) => i.client.name);

console.log(invoicesClient);

const invoiceById = invoices.find((i) => i.id === 2);
console.log(invoiceById);

// Pasa el argumento "Maria" a la función importada invoiceByClientName

// const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe')
console.log("Buscar por nombre de cliente");
console.log(invoiceByClientName("Pepe"));

const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter);

console.log("filter eliminar");
const invoiceDeleted = invoices.filter((i) => i.id !== 2);
console.log(invoiceDeleted);

const invoiceFilter2 = invoices.filter((i) => i.items.includes(papper));
console.log(invoiceFilter2);

const result = invoices.some((i) => i.client.name === "Pepe");
console.log(result);
