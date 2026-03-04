import { RowItemView } from "./RowItemView";
import PropTypes from "prop-types";

export const ListItemsView = ({ title, items, handlerDeleteItem }) => {
  return (
    <>
      <h4>{title}</h4>

      {/* La tabla se encarga de mostrar los items de la factura */}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {/* Itera sobre los items de la factura y renderiza un componente RowItemView para cada item */}
          {/*  
          - En React, las listas se utilizan para renderizar un conjunto de elementos basados en datos 
          dinámicos, como un arreglo. 
          - En este caso, el método 'map' recorre los elementos del arreglo y devuelve un componente o 
          elemento JSX para cada uno.
          - Cada elemento en una lista debe tener un atributo 'key' único en el primer componente hijo para 
          ayudar a React a identificar qué elementos han cambiado, agregado o eliminado.
          */}
          {items.map(({ id, product, price, quantity }) => (
            <RowItemView
              key={id}
              id={id}
              product={product}
              price={price}
              quantity={quantity}
              handlerDeleteItem={(id) => handlerDeleteItem(id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

ListItemsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
