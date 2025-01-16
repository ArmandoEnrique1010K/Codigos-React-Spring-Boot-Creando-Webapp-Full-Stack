import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";

// Objeto para el valor inicial del state invoice
const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
};

export const InvoiceApp = () => {

    // Se recomienda que un compontente tenga el siguiente orden:
    // 1. Variables de estado (useState)
    // 2. Efectos secundarios (useEffect)
    // 3. Funciones
    // 4. Contenido HTML

    // State para visualizar el formulario
    const [activeForm, setActiveForm] = useState(false);

    // State para el total de la factura
    const [total, setTotal] = useState(0);

    // State para el contador de items de la factura, el valor inicial es 4, porque hay 3 items en la factura invoice
    const [counter, setCounter] = useState(4);

    // State para la factura, inicialmente se establece invoiceInitial como su valor
    const [invoice, setInvoice] = useState(invoiceInitial);

    // State para los items de la factura, se establece como un arreglo vacio
    const [items, setItems] = useState([]);

    // Desestructura las propiedades del state (objeto) invoice
    const { id, name, client, company } = invoice;

    // Efecto secundario con useEffect, contiene una función de flecha y un arreglo de dependencias
    useEffect(() => {
        // Llama a la función para obtener la factura
        const data = getInvoice();
        console.log(data);

        // Establece en los estados de invoice e items la factura y sus items
        setInvoice(data);
        setItems(data.items);

        // Si el arreglo de dependencias esta vacio, solamente se ejecuta la función cuando se renderice este componente (monta el componente)
    }, []);

    // Normalmente useEffect utiliza un arreglo de dependencias, la función se ejecuta cuando el valor de una de las depenencias cambie, tambien cuenta cuando se define por primera vez
    useEffect(() => {
        // console.log('el counter cambio!')
    }, [counter]);

    // Efecto secundario que depende del state de items
    useEffect(() => {
        // Actualiza el state de total llamando a la función calculateTotal, pasando el state de items
        setTotal(calculateTotal(items));

        // console.log('el items cambio!')
    }, [items]);

    // Función para añadir un item, recibe un objeto que contiene las propiedades desestructuradas
    const handlerAddItems = ({ product, price, quantity }) => {

        // Actualiza el state de items, pasando una copia de los items que se tienen hasta el momento y un nuevo objeto
        setItems([...items, {
            // Asigna el valor actual de counter
            id: counter,

            // Asigna los valores de las propiedades del objeto recibido
            // trim es un método asociado a un string para eliminar los espacios en blancos introducidos que estan por demás
            product: product.trim(),

            // Exiten 2 formas de convertir un string a number

            // Operador unario (+)
            price: +price.trim(),

            // Función global parseInt, espera un argumento que es un string y el sistema de numeración (10 es decimal)
            quantity: parseInt(quantity.trim(), 10)
        }]);

        // Incremenenta el valor de counter en 1
        setCounter(counter + 1);
    }

    // Función para eliminar un item, requiere un id como argumento
    const handlerDeleteItem = (id) => {
        // Actualiza el state de items, devolviendo un arreglo excluyendo el elemento cuyo id coincida
        setItems(items.filter(item => item.id !== id))
    }

    // Función para mostrar/ocultar el formulario
    const onActiveForm = () => {
        // Establece el valor negativo de activeForm (booleano)
        setActiveForm(!activeForm);
    }

    return (
        <>
            {/* Para aplicar estilos CSS utiliza className en lugar de class */}
            {/* container aplica un estilo de contenedor, centra horizontalmente todo el contenido */}
            <div className="container">

                {/* card sirve para definir un contenedor de tipo tarjeta */}
                {/* my-3 sirve para aplicar un margen vertical de tamaño 3 */}
                <div className="card my-3">
                    {/* card-header sirve para definir el titulo de la tarjeta */}
                    <div className="card-header">
                        Ejemplo Factura
                    </div>

                    {/* card-body sirve para definir el cuerpo de la tarjeta */}
                    <div className="card-body">
                        {/* Pasale los valores de las propiedades desestructuradas del objeto invoice para las propiedades id y name del componente InvoiceView */}
                        <InvoiceView id={id} name={name} />

                        {/* Realiza el mismo procedimiento con los demás componentes (ClientView, CompanyView, ListItemsView y TotalView ) */}

                        {/* row sirve para definir un contenedor de tipo fila horizontal */}
                        <div className="row my-3">

                            {/* col sirve para definir un contenedor de tipo columna vertical */}
                            <div className="col">
                                {/* En algunos componentes se pasa la propiedad title, cuyo valor es un string */}
                                <ClientView title="Datos del cliente" client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>

                        </div>

                        {/* Observa que se pasa el valor del state items (un arreglo) */}
                        <ListItemsView title="Productos de la factura" items={items}
                            // Pasa la definición de la función para eliminar un item como propiedad
                            handlerDeleteItem={id => handlerDeleteItem(id)} />

                        {/* Pasale el state de total como propiedad */}
                        <TotalView total={total} />

                        {/* Botón para mostrar el formulario */}
                        <button className="btn btn-secondary"
                            // Al hacer clic en él, utilizando un operador ternario, si activeForm es false, se muestra el texto "Agregar Item", de lo contrario "Cerrar Form"
                            onClick={onActiveForm}>{!activeForm ? 'Agregar Item' : 'Cerrar Form'}</button>

                        {/* Si activeForm es false, entonces se muestra el componente FormItemsView */}

                        {/* Pasa la definición de la función handlerAddItems a la propiedad handler */}

                        {/* Utiliza un operador ternario simplificado,  */}
                        {!activeForm || <FormItemsView handler={handlerAddItems} />}
                    </div>
                </div>
            </div>
        </>
    )
}