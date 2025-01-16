# 3-counter-app

## Use State

El **hook `useState`** es una función que permite agregar **estado** a componentes funcionales en React. 

Sintaxis: `const [state, setState] = useState(initialValue);`

- **`state`**: El valor actual del estado.
- **`setState`**: Una función para actualizar el valor del estado.
- **`initialValue`**: El valor inicial del estado (puede ser un número, cadena, booleano, objeto, etc.).

### Reactividad

Cuando se llama a **`setState`**, React vuelve a renderizar el componente para reflejar el nuevo estado. Los cambios en el estado afectan solo el componente donde se usa `useState`.

### ¿Cuando utilizarlo?

Cuando un componente necesita manejar valores dinámicos o interactivos, como entradas de formularios, contadores, o el estado de botones (habilitado/deshabilitado).
