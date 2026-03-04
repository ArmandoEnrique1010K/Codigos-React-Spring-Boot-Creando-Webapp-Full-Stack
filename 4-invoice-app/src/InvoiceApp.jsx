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

// Componente principal de la aplicación, sirve como el punto central de la lógica
// y el diseño, por lo general el componente principal debe terminar en 'App'
export const InvoiceApp = () => {
  // Estados de la aplicación
  const [activeForm, setActiveForm] = useState(false); // Formulario activo
  const [total, setTotal] = useState(0); // Total de la factura
  const [counter, setCounter] = useState(4); // Contador de items
  const [invoice, setInvoice] = useState(invoiceInitial); // Factura
  const [items, setItems] = useState([]); // Items de la factura

  // Desestructuración de las propiedades del objeto invoice
  const { id, name, client, company } = invoice;

  // El hook 'useEffect' permite manejar efectos secundarios en componentes funcionales de React, como
  // realizar solicitudes a servidores, suscribirse a eventos o interactuar con el DOM.
  // Es ideal para mejorar la eficiencia al controlar cuándo se ejecutan ciertas acciones durante el
  // ciclo de vida del componente.

  // Toma 2 argumentos:
  // 1. Una callback que contiene la lógica del efecto
  // 2. Un arreglo de dependencias, que determina cuándo se ejecuta el efecto si alguna de las
  // dependencias cambia
  // Si el arreglo está vacío, el efecto se ejecuta solo una vez al montar o cargar el componente

  // Llama a la función getInvoice una sola vez para obtener la factura y la almacena en los estados
  // respectivos
  useEffect(() => {
    const data = getInvoice();
    console.log(data);

    // Actualiza el estado de la factura
    setInvoice(data);
    // Actualiza el estado de los items
    setItems(data.items);
  }, []);

  // Ventajas del useEffect
  // - Optimización: Evita ejecuciones innecesarias en cada renderizado.
  // - Control del ciclo de vida: Puedes definir lógica específica para el montaje, actualización y desmontaje del componente.
  // - Legibilidad: Mejora la organización del código al separar la lógica de efectos secundarios.

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

          {/* Cada uno de los componentes que se van a mostrar, representan una parte de la factura con sus respectivos 
          datos, a este procedimiento se le llama maquetación de componentes */}

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
              {/* Si la condición es true, se renderiza la primera expresión, si es false, se renderiza la segunda */}
              {/* En este caso se evalua el valor negativo de activeForm */}
              {!activeForm ? "Agregar Item" : "Cerrar Form"}
            </button>

            {/* Puedes simplificar el operador ternario con un operador && o || */}
            {/* Con el operador || (OR) puedes mostrar un componente solamente si el valor de la condición es false 
            o undefined, de lo contrario no se mostrara nada */}
            {/* Con el operador && (AND) puedes mostrar un componente solamente si el valor de la condición es true */}

            {/* Pasa la función handlerAddItems como prop al componente FormItemsView */}
            {!activeForm || <FormItemsView handler={handlerAddItems} />}
          </div>
        </div>
      </div>
    </>
  );
};
