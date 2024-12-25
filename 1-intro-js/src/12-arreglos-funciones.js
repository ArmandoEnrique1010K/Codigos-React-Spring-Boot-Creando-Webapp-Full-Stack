
const papper = {
    producto: 'papper',
    price: 100,
    quantity: 10,
};

const invoices = [
    {
        id: 1,
        name: 'Compras de oficina',
        client: {
            name: 'Maria',
            lastName: 'Doe',
        },
        items: [
            {
                producto: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                producto: 'mouse',
                price: 200,
                quantity: 1,
            },
            papper,
        ]
    },
    {
        id: 2,
        name: 'Compras de computacion',
        client: {
            name: 'Pepe',
            lastName: 'Doe',
        },
        items: [
            {
                producto: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                producto: 'screen 17',
                price: 800,
                quantity: 1,
            },
            {
                producto: 'cpu intel',
                price: 1000,
                quantity: 10,
            },
        ]
    },
    {
        id: 3,
        name: 'Compras papeleria',
        client: {
            name: 'Jhon',
            lastName: 'Doe',
        },
        items: [
            {
                producto: 'pencil',
                price: 50,
                quantity: 1,
            },
            papper,
        ]
    }
];

const invoicesName = invoices.map(i => i.name);
console.log(invoices)
console.log(invoicesName)

const invoicesClient = invoices.map(i => i.client.name);

console.log(invoicesClient)

const invoiceById = invoices.find(i => i.id === 2)
console.log(invoiceById)

const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe')
console.log(invoiceByClientName)

const invoiceFilter = invoices.filter(i => i.id > 1)
console.log(invoiceFilter)

console.log('filter eliminar')
const invoiceDeleted = invoices.filter(i => i.id !== 2)
console.log(invoiceDeleted)

const invoiceFilter2 = invoices.filter(i => i.items.includes(papper) )
console.log(invoiceFilter2)

const result = invoices.some(i => i.client.name === 'Pepe');
console.log(result)
