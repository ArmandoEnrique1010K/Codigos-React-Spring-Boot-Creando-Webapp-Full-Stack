

const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastName: 'Doe',
        age: 20,
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
        {
            producto: 'paper',
            price: 100,
            quantity: 10,
        },
    ],
    total: function () {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity;
        });
        return total;
    },
    greeting: function () {
        return `Hola ${this.client.name}`;
    }
};

// invoice.client.name = 'Pepe';
// invoice.total = 5000;
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting)
console.log('Total: ' + invoice.total());
