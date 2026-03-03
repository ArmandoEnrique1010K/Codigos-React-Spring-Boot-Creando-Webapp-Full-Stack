import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";

// Objeto que representa la factura inicial
const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

// Componente principal de la aplicación
export const InvoiceApp = () => {
  // Estados de la aplicación
  const [activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  // Desestructuración de la factura
  const { id, name, client, company } = invoice;

  // El hook useEffect se ejecuta una sola vez cuando el componente se monta
  useEffect(() => {
    // Llama al método getInvoice para obtener la factura
    const data = getInvoice();
    console.log(data);
    // Actualiza el estado de la factura
    setInvoice(data);
    // Actualiza el estado de los items
    setItems(data.items);
  }, []);

  useEffect(() => {
    console.log("el counter cambio!");
  }, [counter]);

  // Cada vez que los items cambian, se ejecuta el useEffect para calcular el total de la factura y actualizar el estado
  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  // Función auxiliar que agrega un item a la factura
  const handlerAddItems = ({ product, price, quantity }) => {
    // Mantiene los items anteriores y agrega el nuevo item
    setItems([
      ...items,
      {
        id: counter,
        // trim es un método que elimina los espacios en blanco al inicio y al final de una cadena
        product: product.trim(),
        // Existen 2 formas de convertir un string a number
        // 1. Usando el operador +
        // 2. Usando parseInt, una función global que lleva 2 parámetros: el string y el sistema de numeración
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);

    // Incrementa el contador
    setCounter(counter + 1);
  };

  // Función auxiliar que elimina un item de la factura
  const handlerDeleteItem = (id) => {
    // Filtra los items y mantiene solo los que no coinciden con el id
    setItems(items.filter((item) => item.id !== id));
  };

  // Función auxiliar que activa o desactiva el formulario (invierte el valor del estado)
  const onActiveForm = () => {
    setActiveForm(!activeForm);
  };

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Ejemplo Factura</div>

          {/* Cada uno de los componentes que se van a mostrar, representan una parte de la factura con sus respectivos datos */}
          {/* Cuerpo de la factura */}
          <div className="card-body">
            <InvoiceView id={id} name={name} />

            {/* Datos del cliente */}
            <div className="row my-3">
              <div className="col">
                <ClientView title="Datos del cliente" client={client} />
              </div>

              {/* Datos de la empresa */}
              <div className="col">
                <CompanyView title="Datos de la empresa" company={company} />
              </div>
            </div>

            {/* Lista de items */}
            <ListItemsView
              title="Productos de la factura"
              items={items}
              // Las funciones que se envían como props, se llaman callbacks
              handlerDeleteItem={(id) => handlerDeleteItem(id)}
            />

            {/* Total de la factura */}
            <TotalView total={total} />

            <button className="btn btn-secondary" onClick={onActiveForm}>
              {/* Con el operador ternario se puede mostrar un texto u otro dependiendo del valor del estado */}
              {!activeForm ? "Agregar Item" : "Cerrar Form"}
            </button>

            {/* TODO: CONTINUAR AQUI */}
            {/* Con el operador OR puedes mostrar un componente solamente si el valor de  */}
            {!activeForm || <FormItemsView handler={handlerAddItems} />}
          </div>
        </div>
      </div>
    </>
  );
};
