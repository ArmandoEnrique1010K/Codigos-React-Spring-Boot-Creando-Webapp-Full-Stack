// En JavaScript, un módulo es una unidad de código que organiza y agrupa funcionalidades
// relacionadas.

// Los módulos permiten dividir el código en partes más pequeñas y manejables,
// facilitando su mantenimiento y reutilización en proyectos grandes. Un módulo puede contener
// variables, funciones, clases y otros módulos.

// Importa los módulos invoices (por defecto), invoiceByClientName y papper, se obtienen desde
// la ruta "./data/invoices"
import invoices, { invoiceByClientName, papper } from "./data/invoices";

// Por lo general las funciones se llaman con argumentos para obtener diferentes valores. En
// este caso, se pasa el argumento "Pepe" a la función importada invoiceByClientName.

// const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe')
console.log("Buscar por nombre de cliente");
console.log(invoiceByClientName("Pepe"));

const invoiceFilter2 = invoices.filter((i) => i.items.includes(papper));
console.log(invoiceFilter2);
