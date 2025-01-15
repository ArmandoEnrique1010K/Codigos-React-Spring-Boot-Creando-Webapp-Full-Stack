
import PropTypes from 'prop-types';
import { Book } from './components/Book';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';

// No olvidar colocar la palabra export para hacer este modulo exportable
// El nombre de la función principal exportable lleva el mismo nombre del componente

// Este componente recibe las propiedades a través del objeto props (se define como 
// un parámetro de la función principal del componente) y se puede acceder a ellas 
// utilizando la sintaxis props.nombre_de_la_propiedad.

// Desestructura el objeto props directamente en los parámetros de la función del 
// componente HelloWorldApp para extraer las propiedades requeridas y utilizar sus 
// valores.

// Una práctica común en React es definir la función del componente principal con una 
// función de flecha, en este caso el componente HelloWorldApp.

// Puedes asignar un valor por defecto a la propiedad title directamente en el 
// parámetro de la función. De esta manera, si no se proporciona un título al componente 
// HelloWorldApp, se mostrará el valor definido por defecto.
export const HelloWorldApp = ({ user, id, title, book }) => {

    // Para definir variables que sean accesibles desde cualquier parte de un componente, 
    // simplemente decláralas como una variable de JavaScript dentro del cuerpo del componente.
    // const name = 'Pepe';

    // Para mostrar el valor de esas variables en la vista, encierra la variable entre llaves
    // ({ }) en la parte HTML (parte que retorna un componente funcional como elementos de React).

    // Si una propiedad recibida no esta definida desde el componente padre (main), el valor 
    // que se recibe será undefined.
    console.log(title)

    // Intentar mostrar una propiedad no definida en la vista (navegador) no causará errores en 
    // la aplicación; simplemente no se mostrará nada.

    // También se tiene en cuenta que si una propiedad tiene un valor false (como booleano),
    // null o un string vacío, no se va a mostrar en el navegador.

    // Un mensaje en la consola se puede imprimir 2 veces debido al uso del componente
    // <React.StrictMode> (el modo estricto) en el componente main.

    // TIP: Una forma sencilla de limpiar la consola es haciendo clic derecho en ella y 
    // seleccionando la opción Clear console.

    return (

        // Para incluir varios elementos de React (como elementos HTML) en un componente, 
        // envuélvelos entre paréntesis y asegúrate de que estén contenidos dentro de un solo 
        // elemento principal.

        // Para evitar problemas de estilo con el <div> principal, usa un fragmento que actúa 
        // como un contenedor invisible en el DOM, no añaden nodos adicionales.

        // Existen dos tipos de fragmentos:

        // No nombrados: Se utilizan en la mayoría de los casos, se definen con <> y </>.
        // Nombrados: Usa el componente <Fragment> y </Fragment>, requiere importar Fragment 
        // de React.

        <>
            <Title title={title} />
            <UserDetails user={user} id={id} />
            <Book book={book} />
        </>
    );
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

HelloWorldApp.defaultProps = {
    title: 'Hola mundo por defecto!',
    book: 'UMl got a gota'
}