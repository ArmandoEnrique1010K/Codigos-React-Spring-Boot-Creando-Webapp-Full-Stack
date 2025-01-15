// La Fetch API es una herramienta integrada en JavaScript para realizar peticiones HTTP
// de manera asíncrona. Permite consumir y manipular datos de servidores remotos sin
// bloquear la ejecución del programa.

// Tipos de Peticiones HTTP
// GET: Consultar datos.
// POST: Enviar datos.
// PUT: Modificar datos.
// DELETE: Eliminar datos.

// JSON Placeholder es un servicio gratuito que permite practicar el consumo de APIs
// URL: https://jsonplaceholder.typicode.com/users
// Respuesta: Un arreglo con 10 objetos que representan usuarios.

// Uso básico de fetch
// fetch(url) realiza una solicitud HTTP y devuelve una promesa que resuelve un objeto
// Response.
// El método .json() del objeto Response también devuelve una promesa.
// Esto demuestra que Fetch no bloquea el flujo del código.

// El objeto Response contiene:
// status: Código HTTP de la respuesta (ej. 200 = éxito, 404 = no encontrado).
// body: Cuerpo de la respuesta (un ReadableStream que debe convertirse a JSON).

const httpClient = fetch("https://jsonplaceholder.typicode.com/users");

// httpClient.then(response => {
//     // console.log(response)
//     response.json().then(data => {
//         console.log(data)
//     });
// });

// Puedes encadenar métodos then para un código más legible:

httpClient
  .then((response) => response.json()) // Convierte la respuesta a JSON
  .then((data) => console.log(data)); // Muestra los datos en la consola

console.log("Hola que tal!"); // Se ejecuta antes de que la promesa se resuelva
