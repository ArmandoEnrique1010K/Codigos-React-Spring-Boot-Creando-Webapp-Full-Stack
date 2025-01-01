// FETCH API

// La API Fetch es una herramienta integrada en JavaScript que facilita la realización de peticiones HTTP asíncronas para consumir y manipular datos desde servidores remotos. Está disponible en los navegadores web modernos y no requiere la importación de librerías externas.

// Una petición HTTP es un mensaje que el cliente (por ejemplo, un navegador web) envía a un servidor para solicitar un recurso, como una página web o un archivo.

// Tipos de Peticiones HTTP:

// GET: Consultar datos.
// POST: Enviar datos.
// PUT: Modificar datos.
// DELETE: Eliminar datos.

/* */

// La función global fetch proporciona una forma sencilla de obtener recursos de manera asíncrona a través de la red, devolviendo una promesa que se cumple una vez que la respuesta está disponible.

// La promesa se resuelve con un objeto denominados Response, que representa la respuesta a la solicitud HTTP. Luego, se pueden encadenar múltiples operaciones con el método then.

// Realiza una petición GET a la URL y devuelve una promesa
// fetch("http://example.com/movies.json")
//   // Convierte la respuesta de la solicitud en formato JSON
//   .then((response) => response.json())
//   // Muestra los datos de la respuesta (formato JSON) en la consola
//   .then((data) => console.log(data));

/* */

// JSON Placeholder es un servicio gratuito que ofrece múltiples endpoints para practicar y aprender a consumir APIs. Por ejemplo, el endpoint /users proporciona una lista de usuarios. Al acceder a esa URL, se puede visualizar un código en formato JSON que muestra un arreglo con 10 objetos como elementos
const httpClient = fetch("https://jsonplaceholder.typicode.com/users");

// El objeto Response que se obtiene en la consola contiene toda la información de la respuesta HTTP incluyendo el status (200 indica que la solicitud fue exitosa) y el body (cuerpo de la respuesta, es un ReadableStream que necesita ser convertido a un formato JSON)

// El metodo then es una función asincrona
// httpClient.then((response) => {
//   console.log(response);
// });

/* */

// El método json del objeto Response devuelve una promesa que se resuelve con los datos en formato JSON. Encadenar un segundo then después del primero que obtiene la respuesta es una práctica común para manejar la conversión de la respuesta a JSON y trabajar con los datos.

// Convierte la respuesta del objeto response a JSON y luego se anida un metodo then para pasar la respuesta
// httpClient.then(response => {
//     response.json().then(data => {
//         console.log(data)
//     });
// });

// El resultado en la consola será un arreglo que contiene 10 objetos que representan los usuarios obtenidos de JSON Placeholder. En cada uno de los objetos, la propiedad name contiene el nombre del usuario.

/* */

// Al eliminar las llaves y encadenar los métodos then, el código se vuelve más limpio y fácil de entender. Cada then devuelve una promesa, lo que permite encadenar múltiples operaciones de manera sencilla.

httpClient
  .then((response) => response.json())
  .then((data) => console.log(data));

// El mensaje Hola que tal! se imprimirá inmediatamente, antes de que la promesa devuelta por fetch se resuelva, demostrando que las operaciones asíncronas no bloquean la ejecución del código.
console.log("Hola que tal!");
