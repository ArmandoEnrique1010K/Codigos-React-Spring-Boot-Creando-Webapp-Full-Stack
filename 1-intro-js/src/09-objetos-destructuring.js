const user = {
  username: "andres",
  email: "correo@google.com",
  age: 20,
  ranking: 9,
};

// Definir constantes individualmente puede ser útil, pero es menos conciso que
// la desestructuración, especialmente con objetos grandes

// const username = user.username;
// const ranking = user.ranking;
// const age = user.age;

// La desestructuración permite extraer propiedades de un objeto y asignarlas a
// variables de manera concisa

// El orden de las propiedades en el objeto no afecta la desestructuración
const { username, ranking, age } = user;

console.log(`${username} tiene ${age} de edad`);
console.log(ranking);

// TIP: En VSCode puedes seleccionar un bloque de código y pulsar la combinación
// de teclas CTRL + K + C para convertirlo en un comentario
