import PropTypes from "prop-types";

export const ClientView = ({ title, client }) => {
  // La propiedad 'client' es un objeto que contiene la información del cliente, puedes desestructurarla
  const {
    // Puedes renombrar las propiedades de un objeto, en este caso el nombre del cliente
    name: nameClient,
    lastName,
    // Puedes desestructurar objetos anidados
    address: { country, city, street, number },
  } = client;

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">
          {nameClient} {lastName}
        </li>
        <li className="list-group-item">
          {country} / {city}
        </li>
        <li className="list-group-item">
          {street} {number}
        </li>
      </ul>
    </>
  );
};

// Recuerda instalar PropTypes para utilizarlo
ClientView.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
};
