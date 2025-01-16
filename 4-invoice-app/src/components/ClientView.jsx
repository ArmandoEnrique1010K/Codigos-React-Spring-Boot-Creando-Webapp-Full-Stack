import PropTypes from 'prop-types';

export const ClientView = ({ title, client }) => {

    // Desestructura la propiedad client
    const {
        // Puedes renombrar el nombre de la propiedad utilizando dos puntos (:)
        name: nameClient,
        lastName,
        // Desestructuración anidada, address es un objeto
        address: {
            country,
            city,
            street,
            number }
    } = client;

    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                {/* Muestra el valor de nameClient (propiedad renombrada) */}

                {/* active sirve para resaltar un elemento */}
                <li className="list-group-item active">{nameClient} {lastName}</li>
                <li className="list-group-item">{country} / {city}</li>
                <li className="list-group-item">{street} {number}</li>
            </ul>
        </>
    )
}

ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired,
}