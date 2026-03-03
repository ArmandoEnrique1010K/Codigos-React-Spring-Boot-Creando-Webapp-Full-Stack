// La función global fetch retorna una promesa, contiene un parametro que es una URL
// Sirve para hacer peticiones HTTP, por ejemplo para obtener datos de una API
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');


// La forma tradicional de manejar la promesa y obtener los datos es la siguiente
// httpClient.then(response => {
//   console.log(response)
// 
//   response.json().then(data => {
//     console.log(data)
//   });
// });

// response es un objeto que contiene la respuesta de la peticion, contiene la siguientes propiedades
// - body: es un ReadableStream que contiene la respuesta de la peticion, debe ser convertido a JSON para ser leido
// - headers: es un objeto que contiene los headers de la peticion
// - ok: es un booleano que indica si la peticion fue exitosa
// - status: es un numero que indica el status de la peticion (200 = OK, 404 = Not Found, 500 = Internal Server Error, etc)
// - url: es el texto que indica la url de la peticion
// El método json del objeto response retorna una promesa que contiene el JSON de la respuesta


// Puedes encadenar las promesas de la siguiente manera
httpClient
  .then(response => response.json())
  .then(data => console.log(data));

// El método fetch es una operacion asincrona, por lo cual el mensaje se imprimira antes de que se complete la peticion
console.log('Hola que tal!');