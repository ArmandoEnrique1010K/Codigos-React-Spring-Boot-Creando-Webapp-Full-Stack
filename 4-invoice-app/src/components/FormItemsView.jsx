import { useEffect, useState } from "react";

export const FormItemsView = ({ handler }) => {

    // En lugar de definir un state para cada campo del formulario, se utiliza un objeto que contiene los nombres de los campos del formulario como propiedades
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    // Desestructura formItemState para obtener sus propiedades como variables
    const { product, price, quantity } = formItemsState;


    useEffect(() => {
        // console.log('el precio cambio!')
    }, [price]);

    useEffect(() => {
        // console.log('el formItemsState cambio!')
    }, [formItemsState]);


    // Función para manejar los cambios en los campos del formulario

    // Desestructura la propiedad target del objeto event, luego desestructura sus propiedades anidadas name y value

    // target representa el elemento HTML asociado al evento onChange, 
    const onInputChange = ({ target: { name, value } }) => {
        // name y value se utilizan para acceder a los valores de los atributos name y value respectivamente
        // console.log(name);
        // console.log(value);

        // Para actualizar formItemsState, se pasa un objeto que contiene una copia de las propiedades de formItemsState
        setFormItemsState({
            ...formItemsState,
            // Define una variable computada, actualiza el campo segun el valor del atributo name y asigna el valor introducido
            [name]: value
        });
    }

    // Función para enviar el formulario
    const onInvoiceItemsSubmit = (event) => {
        // preventDefault es un metodo asociado al objeto event que se envia por defecto, evita que se recarge la pagina al enviar el formulario
        event.preventDefault();

        // Validaciones para el formulario, se validan para evitar cualquier error al introducir un campo

        // Si la cantidad de caracteres en la propiedad product es menor que 1
        if (product.trim().length < 1) {
            // Muestra un mensaje de error con la función global alert
            alert('Error, el nombre del producto no puede estar vacio')

            // Un return sin ningun valor asegura que no se siga ejecutando el procedimiento de la función, luego del return
            return;
        }

        // Realiza el mismo procedimiento con los demás campos
        if (price.trim().length <= 1) {
            alert('Error, el precio debe tener 2 digitos')
            return
        }

        // isNaN es una función para validar que el texto introducido en el campo sea de tipo numerico

        // Se evita el error de mostrar NaN en la vista del usuario si ha introducido un texto
        if (isNaN(price.trim())) {
            alert('Error, el precio no es un numero')
            return;
        }

        // Valida que la cantidad no sea menor que 1
        if (quantity.trim() < 1) {
            alert('Error, la cantidad tiene que ser mayor a 0')
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('Error, la cantidad no es un numero')
            return;
        }

        // Llama a la función handler para agregar el item (es una propiedad recibida) y se le pasa el state de formItemsState (un objeto)

        // A este procedimiento se le puede llamar pasar una propiedad de componente hijo a componente padre
        handler(formItemsState);

        // Limpia los valores introducidos en los campos, es importante tener en cuenta el tipo de dato
        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        });
    }

    return (<>
        {/* Define un formulario, el evento onSubmit ejecuta una función cuando se envia el formulario */}

        {/* Una buena practica es definir una función que se ejecutara cuando se envie el formulario y luego se llame a esa función dentro del evento onSubmit y no definir la función dentro del evento onSubmit */}

        {/* w-50 aplica un ancho del 50% respecto al elemento padre contenedor */}
        <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
            {/* Contiene 3 campos: nombre del producto (product), precio (price) y cantidad (quantity), los nombres se especifican en el atributo name */}
            <input
                type="text"
                name="product"
                // value sirve para definir el valor introducido en el campo, en este caso el state de product (se debe actualizar cada vez que introduce un caracter)
                value={product}
                placeholder="Producto"
                // form-control aplica un estilo para el campo de tipo text
                className="form-control m-3"
                // El evento onChange, ejecuta una función cada vez que cambia el valor del campo, en este caso se llama directamente a onInputChange
                onChange={onInputChange} />
            <input
                type="text"
                name="price"
                value={price}
                placeholder="Precio"
                className="form-control m-3"
                // Normalmente se realiza lo siguiente en el evento onChange, se pasa un objeto event que representa el elemento del formulario
                onChange={event => onInputChange(event)} />
            <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={onInputChange} />

            {/* Un boton de tipo submit sirve para enviar el formulario */}
            <button
                type="submit"
                // btn aplica un estilo para el botón y btn-primary aplica un color azul claro de fondo
                className="btn btn-primary m-3">
                Nuevo Item
            </button>
        </form>
    </>)
}