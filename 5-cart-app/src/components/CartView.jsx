import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateTotal } from "../services/productService";

// Componente para la vista del carrito de compras
export const CartView = ({ handlerDelete, items }) => {

    // State para el total del carrito
    const [total, setTotal] = useState(0);

    // Este hook se utiliza para definir una ruta, es proporcionado por React Router DOM
    const navigate = useNavigate();

    // Efecto secundario que depende de los items del carrito
    useEffect(() => {
        // Recalcula el total con la función calculateTotal, pasa los items como argumento
        setTotal(calculateTotal(items));
    }, [items]);

    // Función auxiliar para eliminar un producto por su ID
    const onDeleteProduct = (id) => {
        // console.log('eliminado producto')

        // Llama a handlerDelete (función como propiedad recibida) y se le pasa el mismo ID
        handlerDelete(id);
    }

    // Función para navegar al endpoint "/catalog", se redirige utilizando la constante navigate
    const onCatalog = () => {
        navigate('/catalog');
    }

    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Itera con el valor de la propiedad items para mostrar cada producto en el carrito */}
                    {items.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            {/* El precio total por item se calcula multiplicando la cantidad por el precio */}
                            <td>{item.quantity * item.product.price}</td>
                            {/* Botón para eliminar el producto, llama a onDeleteProduct y se la pasa el id del producto */}
                            <td><button
                                className="btn btn-danger"
                                onClick={() => onDeleteProduct(item.product.id)}>eliminar</button></td>
                        </tr>

                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        {/* El atributo colSpan sirve para combinar las celdas de una columna */}

                        {/* Un detalle es que React utiliza la propiedad colSpan y no colspan (en paginas web con HTML, CSS y JS puro) */}
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>

            {/* Botón para llamar a la función onCatalog */}
            <button
                className="btn btn-success"
                onClick={onCatalog}
            >Seguir comprando</button>
        </>
    )
}
