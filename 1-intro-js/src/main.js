// DOM es el Document Object Model, es el arbol de nodos que representa la estructura de una pagina web
// Puedes observarlo en las herramientas de desarrollo de tu navegador (pulsa F12, pestaña 'Elements')
// Solamente cuando la página se carga completamente, el DOM se crea

// Función asincrona para obtener todos los usuarios y mostrarlos en la pagina
// Utiliza los terminos 'async' y 'await' para manejar las promesas de una forma más sencilla
const findAllUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  // El objeto 'document' representa el documento HTML, contiene varios métodos para interactuar con el DOM

  // El método 'createElement' retorna un nuevo elemento HTML
  // Crea un elemento 'ul' en el DOM
  const ul = document.createElement('ul');

  // Recorre el arreglo de usuarios y crea un elemento 'li' para cada usuario 
  users.forEach(user => {
    const li = document.createElement('li');

    // La propiedad 'innerText' establece el texto que contiene el elemento
    // Agrega el nombre del usuario al elemento 'li'
    li.innerText = user.name;

    // El método 'append' agrega un elemento al final del elemento padre
    // Agrega el elemento 'li' al elemento 'ul'
    ul.append(li);

    console.log(user.name);
  });

  // El método 'getElementById' retorna el elemento que contiene cierto valor del atributo id respectivamente
  // Agrega el elemento 'ul' al elemento que tiene el id 'root'
  document.getElementById('root').append(ul);
}


findAllUsers();

console.log('Hola que tal!');