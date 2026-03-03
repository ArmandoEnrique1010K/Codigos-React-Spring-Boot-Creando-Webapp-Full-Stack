const user = {
  username: 'andres',
  email: 'correo@google.com',
  age: 20,
  ranking: 9,
};

// Desestructuración de un objeto que es un parámetro de una función
const detail = ({ username, email }) => {
  console.log(`El detalle del usuario ${username} con correo ${email}`)
}

// El argumento user debe ser un objeto con las propiedades username y email
detail(user)