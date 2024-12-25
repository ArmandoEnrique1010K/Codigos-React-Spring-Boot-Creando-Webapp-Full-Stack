

const user = {
    username: 'andres',
    email: 'correo@google.com',
    age: 20,
    ranking: 9,
};

const detail = ( {username, email} ) => {
    console.log(`El detalle del usuario ${username} con correo ${email}`)
}

detail(user)

