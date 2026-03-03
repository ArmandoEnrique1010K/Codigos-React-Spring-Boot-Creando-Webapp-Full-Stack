const user = {
  username: 'andres',
  email: 'correo@google.com',
  age: 20,
  ranking: 9,
};

// Antes para acceder a las propiedades de un objeto se usaba la sintaxis de punto
// const username = user.username;
// const ranking = user.ranking;
// const age = user.age;

// Ahora con desestructuración o destructuring, extraemos las propiedades del objeto y las asignamos a variables
const { username, ranking, age } = user;

console.log(`${username} tiene ${age} de edad`);
console.log(ranking);