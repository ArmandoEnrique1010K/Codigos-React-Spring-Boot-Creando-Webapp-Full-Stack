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

const invoiceByClientName = (clientName) => {
    
    return invoices.find(i => i.client.name === clientName);
}

const invoiceById = (id) => {
    return invoices.find(i => i.id === id)
}

const findInvoiceById = (id) => {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = invoiceById(id);

            if (result) {
                resolve(result);
            } else {
                reject('error: no existe la factura por el id!')
            }
        }, 2500);
    });

    return promise;
}

export {
    papper,
    invoices as default,
    invoiceByClientName,
    invoiceById,
    findInvoiceById
}