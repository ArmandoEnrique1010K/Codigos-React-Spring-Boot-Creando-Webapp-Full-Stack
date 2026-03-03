import { useState } from "react";

export const CounterApp = ({ value }) => {
  // Los hooks de React son funciones que permiten "engancharse" al sistema de renderizado de React
  // Se definen al inicio de la función del componente

  // El hook useState sirve para definir una variable de estado, contiene 2 elementos desestructurados
  // 1. El valor de la variable de estado
  // 2. La función para actualizar el valor de la variable de estado (el nombre comienza con set)
  // useState contiene un argumento que es el valor inicial de la variable
  const [counter, setCounter] = useState(value);

  // Puedes definir funciones auxiliares dentro del componente
  // En este caso la función se encarga de incrementar el contador en 1
  // La función setCounter recibe como parámetro el valor actual del contador y retorna el nuevo valor
  const counterIncrement = () => setCounter((c) => c + 1);

  // Cuando se llama a setCounter, React vuelve a renderizar el componente para reflejar el nuevo estado,
  // los cambios en el estado afectan solo el componente donde se usa useState.

  // Utiliza useState cuando un componente necesita manejar valores dinámicos o interactivos,
  // como entradas de formularios, contadores, o el estado de botones (habilitado/deshabilitado).

  return (
    <>
      {/* Muestra el valor del contador dinámicamente */}
      <h2>El valor del contador es {counter}</h2>
      {/* onClick es un evento que se dispara cuando se hace clic en el botón, en este caso se ejecuta la función counterIncrement */}
      {/* Normalmente se pasa un callback (función) de la siguiente manera: () => counterIncrement(), pero se puede simplificar */}
      <button onClick={counterIncrement}>incrementar contador +1</button>
    </>
  );
};
