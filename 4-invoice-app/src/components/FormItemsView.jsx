import { useState } from "react";
import PropTypes from "prop-types";

// Representa un formulario para agregar items a la factura
export const FormItemsView = ({ handler }) => {
  // Se recomienda utilizar un objeto en lugar de varios useState para mantener el
  // estado de los inputs del formulario
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;

  // Función auxiliar que actualiza el estado del formulario
  const onInputChange = ({ target: { name, value } }) => {
    // Muestra el nombre del campo
    // console.log(name);
    // Muestra el valor del campo
    // console.log(value);

    // Mantiene los valores anteriores y actualiza el valor del campo que se está modificando
    setFormItemsState({
      ...formItemsState,
      // Utiliza la sintaxis de corchetes para actualizar el campo, de tal manera que
      // si el nombre del campo es 'product', entonces se actualiza el valor de 'product'
      [name]: value,
    });
  };

  // Función auxiliar que envia el formulario
  const onInvoiceItemsSubmit = (event) => {
    // Previene el comportamiento por defecto del formulario (recargar la página al enviar)
    event.preventDefault();

    // Validaciones del formulario
    if (product.trim().length < 1) {
      // La función 'alert' muestra un mensaje en una ventana emergente
      alert("Error, el nombre del producto no puede estar vacio");
      // Un return vacio evita que el código siga ejecutándose línea por línea
      return;
    }

    if (price.trim().length <= 1) {
      alert("Error, el precio debe tener 2 digitos");
      return;
    }

    if (isNaN(price.trim())) {
      alert("Error, el precio no es un numero");
      return;
    }

    if (quantity.trim() < 1) {
      alert("Error, la cantidad tiene que ser mayor a 0");
      return;
    }

    if (isNaN(quantity.trim())) {
      alert("Error, la cantidad no es un numero");
      return;
    }

    // Llama a la función recibida como prop y le envía el estado del formulario
    handler(formItemsState);

    // Limpia los valores introducidos en los campos
    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      {/* Los formularios sirven para capturar datos introducidos por el usuario, y 
      generalmente se envian a un servidor para ser procesados */}
      {/* En React los formularios se manejan de manera diferente a los formularios 
      tradicionales mediante el estado y los eventos */}
      {/* En un elemento controlado, React gestiona el valor del formulario mediante 
      el estado del componente. */}
      {/* El evento onSubmit se ejecuta cuando se envia el formulario, contiene un
      callback */}
      <form className="w-50 pt-2" onSubmit={onInvoiceItemsSubmit}>
        <input
          // Tipo de input
          type="text"
          // Nombre del campo
          name="product"
          // Valor actual del campo
          value={product}
          // Placeholder, es el texto que se muestra cuando el campo está vacio
          placeholder="Producto"
          className="form-control my-3"
          // El evento onChange contiene un callback que se ejecuta cuando el valor del campo cambia
          // onChange={(event) => onInputChange(event)}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Precio"
          className="form-control my-3"
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Cantidad"
          className="form-control my-3"
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-primary my-3">
          Nuevo Item
        </button>
      </form>
    </>
  );
};

// En este caso la prop handler es una función requerida
FormItemsView.propTypes = {
  handler: PropTypes.func.isRequired,
};
