import PropTypes from "prop-types";
import { Book } from "./components/Book";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";

// Un componente contiene una función de flecha o una función normal que retorna contenido JSX
// El componente HelloWorldApp recibe props (propiedades) del componente padre
// Normalmente las props se acceden mediante un objeto llamado props, pero puedes desestructurarlo
// y acceder directamente a ellas tal y como se muestra
export const HelloWorldApp = ({
  user,
  id,
  // En el caso de que no se pase la propiedad title, se asigna el valor por defecto
  title = "Hola mundo por defecto!",
  book = "UML got a gota",
}) => {
  // Dentro de la función, antes del return se puede ejecutar codigo javascript
  // const name = 'Pepe';
  // console.log(name);

  console.log(title);

  // Solamente si quieres ver todas las props que se pasan al componente, debes pasar el objeto
  // props como unica propiedad e imprimirlo en consola, de la siguiente forma:
  // export const HelloWorldApp = (props) => { console.log(props);}
  // console.log(props);

  return (
    // Contenido JSX, se puede escribir codigo javascript entre llaves {}
    // Este contenido se renderiza en el navegador

    // Los fragmentos <> </> son elementos que no se renderizan en el DOM pero sirven para agrupar elementos
    // Tambien puedes definir un fragmento con un nombre, por ejemplo: <Fragment></Fragment>, pero es menos usado
    <>
      {/* En cada una de las props de los componentes hijos se pasan las props recibidas */}
      <Title title={title} />
      {/* La propiedad user se pasa como un objeto con las propiedades name y lastame */}
      <UserDetails user={user} id={id} />
      <Book book={book} />
    </>
  );
};

// Las propTypes sirven para documentar y validar las props que recibe un componente
// Instala la libreria prop-types ejecutando en consola: npm install prop-types
HelloWorldApp.propTypes = {
  // A cada propiedad se le asigna un tipo de dato
  // isRequired indica que la propiedad es obligatoria
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};
