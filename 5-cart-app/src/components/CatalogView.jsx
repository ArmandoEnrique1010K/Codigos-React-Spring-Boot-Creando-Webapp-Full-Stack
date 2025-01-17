import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

// Componente para la vista del catalogo de productos, recibe la propiedad handler (función)
export const CatalogView = ({ handler }) => {

    // State para la lista de productos
    const [products, setProducts] = useState([]);

    // State para establecer el estado de carga
    const [isLoading, setIsLoading] = useState(true);

    // Función asincrona para listar todos los productos
    const findAll = async () => {
        // Llama a la función getProducts, se añade un await porque es una función asincrona
        const prods = await getProducts();

        // Establece en el state de products los productos recibidos y un false en el state de isLoading (termino de cargar)
        setProducts(prods);
        setIsLoading(false);
    }

    // Efecto secundario ejecutable al renderizar este componente
    useEffect(() => {
        findAll();
    }, []);

    return (
        <>
            {
                isLoading &&
                <div className="alert alert-info">Cargando ...</div>
            }
            <div className="row">
                {products.map(prod => (
                    <div className="col-4 my-2"
                        key={prod.id}>

                        {/* Muestra un recuadro por cada producto */}
                        <ProductCardView
                            // Pasa la función handler como propiedad
                            handler={handler}
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}