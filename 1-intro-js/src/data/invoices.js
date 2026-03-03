// Crea modulos en archivos separados para exportar
// Normalmente los datos estaticos se almacenan dentro de una carpeta llamada data
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

// Generalmente las funciones que se van a exportar llevan al menos un parametro
const invoiceByClientName = (clientName) => {
  return invoices.find(i => i.client.name === clientName);
}

const invoiceById = (id) => {
  return invoices.find(i => i.id === id)
}

// Busca una factura por el id, la función devuelve una promesa
const findInvoiceById = (id) => {

  // El constructor Promise recibe una funcion callback con 2 parametros
  // - resolve: para resolver la promesa
  // - reject: para rechazar la promesa
  const promise = new Promise((resolve, reject) => {

    // Simula una operacion asincrona con la función global setTimeout
    // setTimeout recibe 2 parametros
    // - una funcion callback
    // - el tiempo en milisegundos
    setTimeout(() => {
      const result = invoiceById(id);

      // Si existe la factura, se resuelve la promesa con el resultado
      if (result) {
        resolve(result);
      } else {
        // Si no existe la factura, se rechaza la promesa con un error
        reject('error: no existe la factura por el id!')
      }

      // Simula un retraso de 2.5 segundos
    }, 2500);
  });

  // Retorna la promesa
  return promise;
}

// Puedes colocar la exportacion de variables y funciones al final del archivo
// Otra forma es colocar el termino "export" antes de cada una de ellas
export {
  papper,
  // "as default" representa la exportacion por defecto del modulo
  invoices as default,
  invoiceByClientName,
  invoiceById,
  findInvoiceById
}