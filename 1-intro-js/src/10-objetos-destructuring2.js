const user = {
  username: "andres",
  email: "correo@google.com",
  age: 20,
  ranking: 9,
};

// DESESTRUCTURACIÓN DE OBJETOS EN FUNCIONES

// Puedes desestructurar las propiedades de un objeto dentro del cuerpo de una función. Esto facilita el acceso a propiedades específicas del objeto y simplifica el código.

// const detail = (user) => {
//   const { username, email } = user;
//   console.log(`El detalle del usuario ${username} con correo ${email}`);
// };

// La desestructuración puede hacerse directamente en los parámetros de la función. Esto simplifica aún más el código y es una práctica común en bibliotecas modernas como React.
const detail = ({ username, email }) => {
  console.log(`El detalle del usuario ${username} con correo ${email}`);
};

detail(user);
