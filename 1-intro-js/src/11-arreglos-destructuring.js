const users = ["pepe", "ana", "maria", "juan", "sebastian", "carlos", "josefa"];

// La desestructuración de arreglos permite extraer elementos individuales de un arreglo
// y asignarlos a variables. Utiliza corchetes [] para indicar la desestructuración y
// el orden de los elementos

// Puedes obtener elementos específicos y omitir algunos usando comas vacías en la
// desestructuración. Esto es útil para ignorar elementos no deseados en el arreglo

// Si deseas obtener todos los elementos restantes del arreglo que no se han desestructurado
// previamente, utiliza el operador Rest (...) para agrupar el resto de los elementos
// en un nuevo arreglo

// El operador Rest agrupa los elementos restantes, a diferencia del operador Spread
// que expande elementos individuales.
const [pepe, ana, maria, ...rest] = users;

// La combinación de la desestructuración y el operador Rest permite extraer elementos
// individuales de un arreglo y al mismo tiempo recoger el resto de los elementos en un
// nuevo arreglo. Esta técnica es útil para trabajar con arreglos en JavaScript.

// Imprime los valores extraídos y el arreglo restante utilizando el operador Rest en la
// variable rest
console.log(pepe, ana, maria, ...rest);
