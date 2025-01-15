// Puedes utilizar una función de flecha sin return ni llaves para el componente UserDetails, 
// porque devuelve directamente el JSX (la plantilla HTML como un objeto)

// Recuerda aplicar la desestructuración para obtener los valores recibidos de las 
// propiedades
export const UserDetails = ({ user, id }) => (
    // Si intentas mostrar un objeto directamente en el navegador, se producirá 
    // un error porque React no puede renderizar objetos directamente.

    // Para mostrar los valores de un objeto, debes acceder a sus propiedades 
    // de la misma manera que en JavaScript.

    // Para mostrar el objeto completo como una cadena de texto, se puede utilizar 
    // el método global JSON.stringify(), convierte un objeto JavaScript en una 
    // cadena de texto JSON.
    <div>
        que tal! {user.name} {user.lastName} con el id {id}
    </div>
);