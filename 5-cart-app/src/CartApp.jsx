import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart"
import { CartRoutes } from "./routes/CartRoutes";

// Componente principal de la aplicación
export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <Navbar />
            <div className="container my-4">

                <h3>Cart App</h3>
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