import { RowItemView } from "./RowItemView"
import PropTypes from 'prop-types';

export const ListItemsView = ({ title, items, handlerDeleteItem }) => {

    return (
        <>
            <h4>{title}</h4>
            {/* Utiliza una tabla para mostrar los items de la factura */}

            {/* table, table-striped y table-hover aplica un estilo de tabla, tabla a rayas y resaltado al posicionar el cursor sobre una fila de la tabla */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Para generar dinamicamente los productos, utiliza el metodo map para iterar con la propiedad items (tipo arreglo)
                     */}
                    {/* Tambien se aplica desestructuración a cada elemento del arreglo items (para obtener id, product, price y quantity) */}
                    {items.map(({ id, product, price, quantity }) => (
                        // El componente RowItemView se renderiza por cada elemento
                        <RowItemView
                            // Es importante agregar la propiedad key para asignar un identificador unico a cada elemento
                            // La propiedad key se aplica al primer elemento contenedor
                            key={id}
                            // Pasale las propiedades necesarias al componente
                            id={id}
                            product={product}
                            price={price}
                            quantity={quantity}
                            // Pasa la propiedad handlerDeleteItem hacia el componente hijo
                            handlerDeleteItem={id => handlerDeleteItem(id)}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}

ListItemsView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}