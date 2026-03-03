import React from "react";
import ReactDOM from "react-dom/client";

// Puedes importar la hoja de estilos global de la siguiente manera
import "./index.css";

// En react, se puede utilizar el método createElement o la sintaxis de JSX para crear elementos HTML o componentes de React
// const h1 = React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 'item 1')));

// JSX es una sintaxis que se parece a HTML pero que se puede usar en javascript
// const h1 = <div><ul><li>Hola mundo</li></ul></div>;

// Puedes anidar elementos HTML con el método createElement, lleva 3 parámetros:
// 1. El nombre del elemento HTML
// 2. Un objeto con los atributos del elemento HTML
// 3. Los elementos hijos del elemento HTML
const ul = React.createElement(
  "section",
  null,
  React.createElement(
    "div",
    null,
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "1"),
      React.createElement("li", null, "2"),
      React.createElement("li", null, "3"),
      React.createElement("li", null, "4"),
      React.createElement("li", null, "5"),
      React.createElement("li", null, "6"),
    ),
  ),
);

// Babel es un compilador de javascript que convierte el código JSX a código javascript, puedes probarlo en línea aquí:
// https://babeljs.io/

// Para mostrar el elemento HTML en el DOM, se utiliza el método render, que recibe como parámetro el elemento HTML y el contenedor donde se va a mostrar
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
  ul,
);
