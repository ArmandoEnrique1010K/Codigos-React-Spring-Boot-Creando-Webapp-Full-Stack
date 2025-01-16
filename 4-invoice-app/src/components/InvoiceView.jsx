import PropTypes from 'prop-types';

export const InvoiceView = ({ id, name }) => {

    return (
        <>
            {/* list-group aplica el estilo de lista de items */}
            <ul className="list-group">
                {/* list-group-item aplica estilo de un elemento de la lista */}
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Name: {name}</li>
            </ul>
        </>
    )
}

// Aplica propTypes a las propiedades recibidas del componente, se asigna el tipo de dato y 
// si es obligatorio

// Realiza el mismo procedimiento con los demás componentes
InvoiceView.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}