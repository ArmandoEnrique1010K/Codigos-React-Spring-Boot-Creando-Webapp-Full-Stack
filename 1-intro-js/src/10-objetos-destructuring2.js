const user = {
  username: "andres",
  email: "correo@google.com",
  age: 20,
  ranking: 9,
};

// La desestructuración puede hacerse directamente en los parámetros de la función.
// Esto simplifica aún más el código y es una práctica común en bibliotecas modernas
// como React
const detail = ({ username, email }) => {
  console.log(`El detalle del usuario ${username} con correo ${email}`);
};

// Al momento de llamar a la función, el objeto user debe contar con las propiedades
// desestructuradas (username y email)
detail(user);
