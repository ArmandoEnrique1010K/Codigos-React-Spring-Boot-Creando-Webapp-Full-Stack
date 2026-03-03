// Importa las variables y funciones tomadas de un archivo externo
import invoices, { invoiceByClientName, papper } from './data/invoices';

console.log('Buscar por nombre de cliente')
console.log(invoiceByClientName('Pepe'))

console.log('Listar los items que contienen el producto papper')
const invoiceFilter2 = invoices.filter(i => i.items.includes(papper))
console.log(invoiceFilter2)
