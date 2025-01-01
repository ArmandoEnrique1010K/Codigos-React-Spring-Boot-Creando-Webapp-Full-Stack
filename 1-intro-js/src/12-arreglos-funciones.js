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
      // Instancia de papper (objeto)
      papper,
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

// METODOS EN ARREGLOS

// El método map en JavaScript es una función de los arreglos que permite crear un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original
const invoicesName = invoices.map((i) => i.name);
console.log(invoices);
console.log(invoicesName);

// A diferencia de forEach, que ejecuta una función en cada elemento del arreglo sin devolver un nuevo arreglo, map devuelve un nuevo arreglo con los elementos transformados

// Devuelve los valores de la propiedad name del objeto anidado client de cada elemento
const invoicesClient = invoices.map((i) => i.client.name);

console.log(invoicesClient);

/* */

// El método find devuelve el primer elemento de un arreglo que cumple con una condición especificada en una función de prueba. Si ningún elemento cumple con la condición, find devuelve undefined.

// Encuentra el primer elemento (objeto) del arreglo invoices que contenga el valor identico a 2 en la propiedad id
const invoiceById = invoices.find((i) => i.id === 2);
console.log(invoiceById);

// Para encontrar un objeto en un arreglo basado en el valor de una propiedad específica, se puede usar el método find. Por ejemplo, para buscar una factura por su propiedad id.

// Si no se cumple la condición especificada, el método find devuelve undefined.
const invoiceByClientName = invoices.find((i) => i.client.name === "Pepe");
console.log(invoiceByClientName);

/* */

// El método filter crea un nuevo arreglo con todos los elementos que cumplen con una condición específica. A diferencia de find, filter devuelve un arreglo que puede contener varios elementos.

// Encuentra todos los elementos (objetos) del arreglo invoices que contengan un valor mayor que 1 en la propiedad id
const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter);

/* */

// El método filter puede ser utilizado con operadores de desigualdad para excluir elementos que no cumplen con una condición.

// El operador !== realiza una comparación estricta sin convertir los tipos de datos. Por ejemplo, para excluir elementos con id estrictamente igual a 2 (number).
console.log("filter eliminar");
const invoiceDeleted = invoices.filter((i) => i.id !== 2);
console.log(invoiceDeleted);

// El operador != realiza una comparación no estricta, convirtiendo los tipos de datos si es necesario. Por ejemplo, para excluir elementos con id igual a "2" (como cadena de texto o number).

/* */

// El método includes verifica si un arreglo contiene un valor específico. Retorna true si el valor está presente y false si no lo está. Por ejemplo, para filtrar elementos que contengan una instancia del objeto paper.

// En este caso, encuentra todos los elementos (objetos) que incluyan una instancia del objeto paper en la propiedad items (arreglo)
const invoiceFilter2 = invoices.filter((i) => i.items.includes(papper));
console.log(invoiceFilter2);

/* */

// El método some verifica si al menos un elemento del arreglo cumple con una condición específica. Retorna true si al menos un elemento cumple con la condición y false si ninguno lo hace.

// Comprueba si existe algún elemento que contenga el valor "Pepe" asignado en la propiedad name del objeto client
const result = invoices.some((i) => i.client.name === "Pepe");
console.log(result);
