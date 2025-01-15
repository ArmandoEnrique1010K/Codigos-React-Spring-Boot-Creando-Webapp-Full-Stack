const papper = {
  producto: "papper",
  price: 100,
  quantity: 10,
};

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

const invoiceByClientName = (clientName) => {
  return invoices.find((i) => i.client.name === clientName);
};

const invoiceById = (id) => {
  return invoices.find((i) => i.id === id);
};

// Una promesa es un objeto que representa la eventual finalización o falla de una
// operación asíncrona. Permiten manejar tareas asíncronas de forma más clara que los
// callbacks tradicionales.

// Las promesas se crean con el constructor Promise, que recibe una función con dos
// parámetros:

// resolve: Llamado cuando la operación es exitosa, pasando el resultado.
// reject: Llamado cuando ocurre un error, pasando el motivo.

// La función global setTimeout puede utilizar dentro de una promesa para crear un retraso,
// toma dos argumentos: una función callback o de flecha que ejecutara y el tiempo en
// milisegundos que se espera antes de ejecutar esa función.

// Los métodos para manejar el resultado de las promesas son:

// then: Se ejecuta si la promesa se resuelve correctamente.
// catch: Captura errores si la promesa es rechazada.
// finally: Siempre se ejecuta, independientemente del resultado.

// Puedes encapsular promesas en funciones para hacerlas más reutilizables:
const findInvoiceById = (id) => {
  const promise = new Promise((resolve, reject) => {
    // Simula un retraso con la función setTimeout
    setTimeout(() => {
      // Llama a la función para buscar la factura por ID
      const result = invoiceById(id);

      // Si se encuentra la factura, se resuelve la promesa
      // En este caso, el método find puede devolver el objeto resultante de la lista de
      // objetos o un undefined
      if (result) {
        resolve(result);
      } else {
        reject("error: no existe la factura por el id!");
      }

      // Ejecuta la función dentro de 2500 milisegundos, equivale a 2,5 seg.
    }, 2500);
  });

  // Devuelve la promesa
  return promise;
};

/* */

// Para exportar un módulo se utiliza el termino export.

// Utiliza export default para exportar el módulo por defecto.

// En un modulo, puedes tener varias exportaciones, pero solo una de ellas puede ser por
// defecto, esta exportación facilita la importación de una funcionalidad principal.

// Luego puedes importar el módulo por defecto utilizando cualquier nombre, por ejemplo:
// invoiceData para el modulo invoices

// Puedes agrupar varias exportaciones, incluyendo la exportación por defecto, al final
// del código. En este contexto, la exportación del módulo por defecto se define utilizando
// as default.
export {
  papper,
  invoices as default,
  invoiceByClientName,
  invoiceById,
  findInvoiceById,
};
