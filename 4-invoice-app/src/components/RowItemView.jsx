import PropTypes from 'prop-types';

export const RowItemView = ({ id, product, price, quantity, handlerDeleteItem }) => {

    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button
                    className='btn btn-danger'
                    // Observa aqui que toma el id del item que se obtiene en la fila

                    // Al hacer clic en el botón, llama a la función handlerDeleteItem 
                    // pasando el id respectivamente
                    onClick={() => handlerDeleteItem(id)}>eliminar</button></td>
            </tr>
        </>
    )
}

RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}