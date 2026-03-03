import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";

// El archivo main.jsx es el punto de entrada de la aplicación donde se renderiza el componente raíz
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> es un wrapper que ayuda a detectar problemas en el código
  <React.StrictMode>
    {/* Solamente puedes renderizar un único componente, pero puedes anidar varios componentes */}
    <HelloWorldApp
      // Un componente puede contener props (propiedades) que son valores que se le pasan al componente desde este componente
      // En este caso, main.jsx es el componente padre y HelloWorldApp.jsx es el componente hijo
      user={{ name: "Pepe", lastName: "Doe" }}
      // Los valores dinamicos se pasan con llaves {} mientras que los valores estaticos o strings se pasan sin comillas
      id={1}
      title="Hola Mundo"
      // Un valor booleano puede ser pasado sin valor, pero se establece que es true
      // isActive
    />
  </React.StrictMode>,
);
