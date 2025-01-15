// httpClient
//     .then(response => response.json())
//     .then(data => console.log(data));

// Los términos async y await facilitan el manejo de promesas, haciendo que el código
// asíncrono se vea más como código secuencial.

// async: Declara una función asíncrona que siempre devuelve una promesa.
// await: Pausa la ejecución dentro de una función asíncrona hasta que una promesa se
// resuelve, devolviendo su resultado.

// El DOM (Document Object Model) es una representación de un documento HTML que permite
// modificarlo dinámicamente con JavaScript.

// Ejemplo Práctico: Mostrar Usuarios en la Página
// Crea y muestra dinámicamente una lista de usuarios en el navegador.

const findAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  // Crear un contenedor <ul>
  const ul = document.createElement("ul");

  // Iterar sobre los usuarios y agregar sus nombres como <li>
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.name; // Asignar el nombre del usuario
    ul.append(li); // Agregar <li> a <ul>
    console.log(user.name);
  });

  // Insertar <ul> en el elemento con ID 'root'
  document.getElementById("root").append(ul);
};

findAllUsers();

// console.log(users)
console.log("Hola que tal!"); // Se ejecuta antes de que los usuarios se muestren

// React automatiza este proceso, simplificando la creación de interfaces y optimizando
// actualizaciones del DOM con componentes reutilizables.
