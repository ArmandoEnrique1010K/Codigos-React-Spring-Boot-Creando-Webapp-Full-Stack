import { Navigate, Route, Routes } from "react-router-dom"
import { CartView } from "../components/CartView"
import { CatalogView } from "../components/CatalogView"

// Componente de tipo router, se definen las rutas que tendrá la aplicación, además recibe las propiedades necesarias
export const CartRoutes = ({ handlerAddProductCart, handlerDeleteProductCart, cartItems }) => {

    return (
        // Routes define un componente para agrupar las rutas
        <Routes>
            {/* Define una ruta con Route, en este caso para el catalogo de productos */}
            <Route
                // En el path no se utiliza un "/" al inicio del endpoint
                path="catalog"

                // La propiedad element contiene el contenido que se renderizara al acceder al endpoint

                // Pasa la función handlerAddproductCart como el valor de handler
                element={<CatalogView handler={handlerAddProductCart} />}
            />

            {/* Ruta hacia el carrito de compras */}
            <Route path="cart" element={(
                // Si la cantidad de items en el carrito es menor o igual que 0, mostrara un mensaje
                cartItems?.length <= 0 ?
                    <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
                    :
                    // De lo contrario mostrara el componente CartView
                    (
                        <div className="my-4 w-50">
                            {/* Pasa cartItems como el valor para la propiedad items y la función handlerDeleteProductCart para handlerDelete */}
                            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                        </div>
                    )
            )} />

            {/* Ruta hacia la pagina de inicio */}
            {/* El componente Navigate sirve para redirigir hacia una ruta existente, la ruta se establece en la propiedad to */}
            <Route path="/" element={<Navigate to={'/catalog'} />} />

        </Routes>
    )
}