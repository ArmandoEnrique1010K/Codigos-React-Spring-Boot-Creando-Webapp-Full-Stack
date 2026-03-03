const papper = {
  producto: 'papper',
  price: 100,
  quantity: 10,
};


// Los arreglos de objetos son muy comunes en JavaScript
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
      // Tomamos el objeto papper que esta fuera del arreglo
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

console.log(invoices)

// Cada uno de estos metodos itera sobre cada elemento del arreglo y toma el elemento como parametro
// En cada método se define una función callback, que toma el elemento (i) como parametro
// Un callback es una función que se pasa como argumento a otra función

// El metodo map retorna un nuevo arreglo con los resultados de la operacion
const invoicesName = invoices.map(i => i.name);
// Arreglo de nombres de facturas
console.log(invoicesName)

const invoicesClient = invoices.map(i => i.client.name);
// Arreglo de nombres de clientes
console.log(invoicesClient)


// El metodo find retorna el primer elemento que cumpla con la condicion
const invoiceById = invoices.find(i => i.id === 2)
// Factura con id 2
console.log(invoiceById)

// El metodo find retorna el primer elemento que cumpla con la condicion
const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe')
// Factura con el nombre de cliente Pepe
console.log(invoiceByClientName)


// El metodo filter retorna un nuevo arreglo con los elementos que cumplen con la condicion
const invoiceFilter = invoices.filter(i => i.id > 1)
// Arreglo de facturas con id mayor a 1
console.log(invoiceFilter)


// Puedes utilizar un operador de negacion (!) para eliminar un elemento del arreglo
console.log('Método filter para eliminar')
const invoiceDeleted = invoices.filter(i => i.id !== 2)
// Arreglo de facturas con id diferente a 2
console.log(invoiceDeleted)


// El método includes retorna true si el elemento existe en el arreglo
const invoiceFilter2 = invoices.filter(i => i.items.includes(papper))
// Arreglo de facturas con el producto papper (tal y como esta escrito en el arreglo)
console.log(invoiceFilter2)


// El método some retorna true si al menos un elemento cumple con la condicion
const result = invoices.some(i => i.client.name === 'Pepe');
// ¿Existe al menos un elemento con el nombre de cliente Pepe?
console.log(result)