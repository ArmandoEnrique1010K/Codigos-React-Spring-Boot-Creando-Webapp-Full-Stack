import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart"
import { CartRoutes } from "./routes/CartRoutes";

// Componente principal de la aplicación
export const CartApp = () => {

    // Llama al hook personalizado, se desestructura las propiedades necesarias del objeto que se recibe

    // Tener en cuenta que se trata de una instancia del hook personalizado
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            {/* La barra de navegación se mantiene renderizado en todas las demás paginas, porque esta en un nivel superior que las rutas definidas en CartRoutes */}
            <Navbar />
            <div className="container my-4">

                <h3>Cart App</h3>
                {/* Renderiza el componente CartRoutes, es de tipo router */}

                {/* Pasa las propiedades necesarias al componente CartRoutes: los items del carrito y las funciones para agregar y eliminar un producto */}
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
        </>
    )
}