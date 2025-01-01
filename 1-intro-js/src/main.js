// ASYNC Y AWAIT

// Los términos async y await en JavaScript permiten manejar promesas de una manera más intuitiva y legible.

// async: Se utiliza para declarar una función que siempre devuelve una promesa. Este término se coloca antes de la declaración de la función para convertirla en una función asíncrona.

// await: Se utiliza dentro de funciones declaradas como async para esperar a que una promesa se resuelva. Generalmente, se coloca antes de una expresión que devuelve una promesa, permitiendo asignar el resultado a una variable de manera sincrónica.

// Estos términos hacen que el código asíncrono se parezca más a código secuencial, lo que facilita su comprensión, aunque las operaciones siguen ejecutándose en paralelo y manejan la comunicación con el servidor y el backend.

/* */

// Define una función asincrona para encontrar todos los usuarios
// const findAllData = async () => {
//   // Espera a que se realice la solicitud HTTP a la API
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   // Espera a que se convierta la respuesta (objeto response) a JSON
//   const data = await response.json();
//   // Retorna los datos obtenidos
//   return data;
// };

// Si la función findAllData va a devolver una promesa para manejarla y procesarla, se puede añadir await al momento de llamar a la función para que el código parezca lineal.
// const users = await findAllData();
// console.log(users);

// console.log("Hola que tal!");

/* */

// API DOM

// El DOM (Document Object Model) es una representación en memoria de la estructura de un documento HTML o XML. Permite a los lenguajes de programación, como JavaScript, acceder y manipular los elementos del documento de manera dinámica.

/* */

// Define la función asincrona findAllUsers para imprimir el nombre de cada usuario en la vista (interfaz del navegador)
const findAllUsers = async () => {
  // Espera a que se realice la solicitud HTTP a la API
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Asigna a la constante users la respuesta en formato JSON
  const users = await response.json();

  // Crea un elemento <ul> donde se agregarán los nombres de los usuarios
  const ul = document.createElement("ul");

  // Recorre la lista de usuarios obtenidos con un forEach
  users.forEach((user) => {
    // Crea un nuevo elemento <li> para cada usuario
    const li = document.createElement("li");

    // Asigna el nombre del usuario al texto del elemento <li>
    li.innerText = user.name;

    // Agrega el elemento <li> dentro de <ul>
    ul.append(li);

    // console.log(user.name);
  });

  // Agrega el elemento <ul> al elemento con ID 'root'
  document.getElementById("root").append(ul);
};

findAllUsers();

// El resultado es una lista de nombres de usuarios que se muestra en la página web.

// Los nombres de usuarios también se van a mostrar en la estructura del documento HTML, que se puede visualizar desde las herramientas de desarrollo de Chrome en la sección Elements.

// console.log(users)
console.log("Hola que tal!");

// Lo que se ha hecho aquí manualmente es el tipo de manipulación del DOM que React automatiza para hacer más sencillo y eficiente el desarrollo web. React es una biblioteca de JavaScript que simplifica la creación de interfaces de usuario y el manejo del DOM, permitiendo la creación de componentes reutilizables y una programación más declarativa.
