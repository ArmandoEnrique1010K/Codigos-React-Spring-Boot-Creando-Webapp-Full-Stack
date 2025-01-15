// Se importan las librerias necesarias como React y ReactDOM, además de la hoja de 
// estilos index.css
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// El método createElement de la librería de React sirve para crear un elemento HTML 
// o un componente. Admite tres argumentos:

// Nombre del elemento HTML(como un String).
// Un objeto con los atributos del elemento HTML.
// El contenido del elemento, que puede ser un String, variable u otro elemento anidado.

// Puedes anidar elementos usando createElement para cada elemento. Esto permite construir 
// una estructura compleja de componentes y elementos.
// const h1 = React.createElement('div', null,
//   React.createElement('ul', null,
//     React.createElement('li', null, 'item 1')
//   )
// );

// Anida elementos de React (similares a elementos HTML) de forma directa
// const h1 = <div><ul><li>Hola mundo</li></ul></div>;

// Este código fuente es generado por Babel para crear la lista anidada, al pasarle elementos
// de React
const ul = React.createElement("section", null,
  /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("ul", null,
      /*#__PURE__*/React.createElement("li", null, "1"),
      /*#__PURE__*/React.createElement("li", null, "2"),
      /*#__PURE__*/React.createElement("li", null, "3"),
      /*#__PURE__*/React.createElement("li", null, "4"),
      /*#__PURE__*/React.createElement("li", null, "5"),
      /*#__PURE__*/React.createElement("li", null, "6")
)
)
);

// Es importante utilizar nombres de etiquetas HTML válidos y existentes cuando creas 
// componentes en React.

// El paquete ReactDOM renderiza componentes React en la vista (navegador) del usuario, 
// Precisamente dentro del elemento HTML con el atributo id="root" (ubicado en el archivo 
// index.html)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>

  // Renderiza la constante ul
  ul
)
