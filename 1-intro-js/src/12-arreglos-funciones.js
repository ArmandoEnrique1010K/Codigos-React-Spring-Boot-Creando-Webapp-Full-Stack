// Objeto papper
const papper = {
  producto: "papper",
  price: 100,
  quantity: 10,
};

// Arreglo invoices
const invoices = [
  {
    id: 1,
    name: "Compras de oficina",
    client: {
      name: "Maria",
      lastName: "Doe",
    },
    items: [
      {
        producto: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        producto: "mouse",
        price: 200,
        quantity: 1,
      },
      papper, // Instancia del objeto papper
    ],
  },
  {
    id: 2,
    name: "Compras de computacion",
    client: {
      name: "Pepe",
      lastName: "Doe",
    },
    items: [
      {
        producto: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        producto: "screen 17",
        price: 800,
        quantity: 1,
      },
      {
        producto: "cpu intel",
        price: 1000,
        quantity: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Compras papeleria",
    client: {
      name: "Jhon",
      lastName: "Doe",
    },
    items: [
      {
        producto: "pencil",
        price: 50,
        quantity: 1,
      },
      papper,
    ],
  },
];

console.log(invoices);

// El método map en JavaScript es una función o método global de los arreglos que permite
// crear un nuevo arreglo con los resultados de aplicar una función a cada elemento del
// arreglo original
const invoicesName = invoices.map((i) => i.name);
console.log(invoicesName);

// A diferencia de forEach, que ejecuta una función en cada elemento del arreglo sin
// devolver un nuevo arreglo, map devuelve un nuevo arreglo con los elementos transformados
const invoicesClient = invoices.map((i) => i.client.name);
console.log(invoicesClient);

// El método find devuelve el primer elemento de un arreglo que cumple con una condición
// especificada en una función de prueba.
const invoiceById = invoices.find((i) => i.id === 2);
console.log(invoiceById);

// Si ningún elemento cumple con la condición, find devuelve undefined.
const invoiceByClientName = invoices.find((i) => i.client.name === "Pepe");
console.log(invoiceByClientName);

// El método filter crea un nuevo arreglo con todos los elementos que cumplen con una
// condición específica.
const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter);

// El método filter puede ser utilizado con operadores de desigualdad para excluir elementos
// que no cumplen con una condición.

// El operador !== realiza una comparación estricta sin convertir los tipos de datos.
console.log("filter eliminar");
const invoiceDeleted = invoices.filter((i) => i.id !== 2);
console.log(invoiceDeleted);

// El método includes verifica si un arreglo contiene un valor específico. Retorna true
// si el valor está presente y false si no lo está. Por ejemplo, para filtrar elementos que
// contengan una instancia del objeto papper.
const invoiceFilter2 = invoices.filter((i) => i.items.includes(papper));
console.log(invoiceFilter2);

// El método some verifica si al menos un elemento del arreglo cumple con una condición
// específica. Retorna true si al menos un elemento cumple con la condición y false si
// ninguno lo hace.
const result = invoices.some((i) => i.client.name === "Pepe");
console.log(result);
