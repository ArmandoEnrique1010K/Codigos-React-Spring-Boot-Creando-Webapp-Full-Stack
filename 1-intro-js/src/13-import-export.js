import invoices, { invoiceByClientName, papper } from './data/invoices';

console.log('Buscar por nombre de cliente')
console.log(invoiceByClientName('Pepe'))

const invoiceFilter2 = invoices.filter(i => i.items.includes(papper))
console.log(invoiceFilter2)
