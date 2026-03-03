// Puedes omitir return si el componente no contiene logica
export const UserDetails = ({ user, id }) => (
  <div>
    {/* Las propiedades de un objeto se acceden con la notacion de punto */}
    {/* Puedes utilizar el metodo JSON.stringify para convertir un objeto a string y mostrarlo en el navegador */}
    {/* JSON.stringify(user) */}
    que tal! {user.name} {user.lastName} con el id {id}
  </div>
);

// Una de las grandes ventajas de React es la capacidad de dividir un componente en subcomponentes reutilizables.
// Con la organización de componentes, la aplicación se vuelve más modular y fácil de entender. Cada componente tiene una
// responsabilidad clara y puede ser reutilizado en diferentes partes de la aplicación o en otros proyectos.
