import { useNavigate } from "react-router-dom";

// Componente para un recuadro del producto
export const ProductCardView = ({ handler, id, name, description, price }) => {

    // Hook useNavigate, sirve para establecer una ruta
    const navigate = useNavigate();

    // Función auxiliar para agregar un producto, requiere un objeto como argumento
    const onAddProduct = (product) => {
        console.log(product);

        // Llama a la función handler (recibida como propiedad para agregar el producto) y pasale el argumento
        handler(product);

        // Navega hacia el endpoint "/cart" (el carrito de compras)
        navigate('/cart');
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">$ {price}</p>
                    {/* Botón para agregar el producto, se desestructura las propiedades del objeto que pasa como argumento (pasa los valores como propiedades) */}
                    <button className="btn btn-primary"
                        onClick={() => onAddProduct({ id, name, description, price })}>Agregar</button>
                </div>
            </div>
        </>
    )
}
