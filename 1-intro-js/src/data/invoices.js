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

/* */
/* */

const invoiceByClientName = (clientName) => {
  return invoices.find((i) => i.client.name === clientName);
};

const invoiceById = (id) => {
  return invoices.find((i) => i.id === id);
};

// PROMESAS

// Una promesa en JavaScript es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante. Las promesas permiten manejar tareas asíncronas de manera más elegante y manejable que los callbacks tradicionales.

// Aunque el código en JavaScript se ejecuta de manera secuencial, las promesas operan de forma asíncrona. Esto significa que el código que sigue a una promesa puede ejecutarse antes de que la promesa se resuelva. Primero se ejecuta el código síncrono y luego el asíncrono.

// Las promesas son útiles para operaciones como solicitudes a una API, sin bloquear la ejecución del programa. Sin embargo, no garantizan un éxito del 100%, ya que pueden fallar por diversas razones.

/* */

// Para simular un retraso en JavaScript, se puede crear una promesa con el constructor Promise. Este constructor acepta una función que recibe dos parámetros: resolve y reject

// La función global setTimeout se usa dentro de la promesa para crear un retraso; setTimeout toma dos argumentos: una función callback o de flecha y el tiempo en milisegundos que se espera antes de ejecutar esa función.

// El constructor Promise se utiliza principalmente para envolver funciones que no admiten promesas de forma nativa, especialmente aquellas que operan de manera asíncrona utilizando callbacks.

// new Promise(() => {
//   setTimeout(() => {
//     console.log("Realizando alguna tarea con demora de 2.5 segundos...");
//   }, 2500);
// });

/* */

// METODOS ENCADENADOS EN PROMESAS

// Las promesas en JavaScript son una forma de manejar operaciones asíncronas, permitiendo que el código espere a que se complete una tarea antes de continuar. Es fundamental comprender como se maneja su estado y su resultado.

// Para crear una promesa, se utiliza el constructor Promise, que acepta una función de flecha con dos parámetros:

// resolve: Es una función que se llama cuando la operación asíncrona se completa exitosamente. Se pasa un valor a resolve que se convierte en el resultado de la promesa.

// reject: Es una función que se llama cuando ocurre un error durante la operación asíncrona. Se pasa un motivo o mensaje de error a reject.

/* */

// Se pueden encadenar métodos para manejar el resultado o el error de la promesa.

// then

// Se ejecuta si la promesa se resuelve exitosamente.
// Recibe una función que maneja el valor resultante de la promesa.
// Puede encadenarse para realizar acciones adicionales con el resultado.

// catch

// Se ejecuta si la promesa es rechazada.
// Recibe una función que maneja el error o motivo del rechazo.
// Captura y maneja errores que ocurren en la promesa o en cualquier parte del encadenamiento.

// finally

// Siempre se ejecuta, independientemente de si la promesa se resuelve o se rechaza.
// Se usa para tareas de limpieza o código que debe ejecutarse sin importar el resultado de la promesa.

// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     const result = invoiceById(1);
//     resolve(result);
//   }, 2500);
// });

// promise.then((result) => {
//   console.log(result);
//   console.log("Realizada con exito alguna tarea con demora de 2.5 segundos...");
// });

/* */

// Cuando se trabaja con promesas, es común encontrarse con errores al consumir APIs de forma remota, pueden incluir errores HTTP, errores de sistema, o errores de recurso no encontrado (como el error 404).

// Se puede definir un mensaje en la consola del navegador utilizando uno de estos métodos:

// console.log: Se utiliza para imprimir información general o registros exitosos.
// console.error: Se utiliza para mostrar mensajes de error.
// console.warn: Se utiliza para mostrar advertencias.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = invoiceById(4);

//     if (result) {
//       resolve(result);
//     } else {
//       reject("error: no existe la factura por el id");
//     }
//   }, 2500);
// });

// promise
//   .then((result) => {
//     console.log(result);
//     console.log(
//       "Realizada con exito alguna tarea con demora de 2.5 segundos..."
//     );
//   })

//   .catch((error) => {
//     console.error(error);
//   });

/* */

// En aplicaciones frontend, las promesas se utilizan para manejar tareas asíncronas con retraso. Se manejan con then para éxito y catch para errores.
// Puedes simplificar los métodos then y catch a una sola línea de código cada uno.
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = invoiceById(3);

//     if (result) {
//       resolve(result);
//     } else {
//       reject("error: no existe la factura por el id");
//     }
//   }, 2500);
// });

// promise.then(console.log).catch(console.error);

/* */

// Se puede encapsular una promesa en una función para hacerla reutilizable. En este ejemplo, se define una función findInvoiceById que busca una factura por su ID y devuelve una promesa.

// La función findInvoiceById acepta un id, crea una promesa que simula una operación asíncrona (con un retraso de 2.5 segundos), y resuelve o rechaza la promesa según si la factura existe. La función es llamada con un ID y se manejan los resultados con then y catch.

// Las promesas en JavaScript operan de manera sincrona, eso significa que el código que le sigue luego de la promesa puede ejecutarse antes de que la promesa se resuelva.
const findInvoiceById = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Llama a la función para buscar la factura por ID
      const result = invoiceById(id);

      // Si se encuentra la factura, se resuelve la promesa
      // Recuerda que el método find devuelve el objeto resultante de la lista de objetos o un undefined
      if (result) {
        resolve(result);
      } else {
        reject("error: no existe la factura por el id!");
      }
    }, 2500);
  });

  // Devuelve la promesa
  return promise;
};

/* */

// Para exportar una función o un valor como el módulo por defecto, se usa export default.

// export default (clientName) => {
//   return invoices.find((i) => i.client.name === clientName);
// };

// En un modulo, puedes tener varias exportaciones, pero solo una de ellas puede ser por defecto, esta exportación facilita la importación de una funcionalidad principal.

// Luego puedes importar el módulo por defecto utilizando cualquier nombre, por ejemplo: invoiceByClientNameDefault

// import invoiceByClientNameDefault, { paper, invoices } from "./data/invoices";

/* */

// Puedes agrupar varias exportaciones, incluyendo la exportación por defecto, al final del archivo. En este contexto, la exportación del módulo por defecto se define utilizando as default.
export {
  papper,
  invoices as default,
  invoiceByClientName,
  invoiceById,
  findInvoiceById, // Exporta la función asincrona findInvoiceById
};
