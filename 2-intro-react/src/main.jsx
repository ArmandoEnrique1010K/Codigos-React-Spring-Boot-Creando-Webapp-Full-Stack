import React from 'react'
import ReactDOM from 'react-dom/client'
// Importa la función principal del componente HelloWorldApp
import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Crea una instancia y renderiza componente HelloWorldApp utilizando 
    la sintaxis <HelloWorldApp/> o <HelloWorldApp></HelloWorldApp> */}
    <HelloWorldApp
      // Define la propiedad (prop) user, cuyo valor (tipo objeto) asignado se 
      // pasará al componente HelloWorldApp
      user={{ name: 'Pepe', lastName: 'Doe' }}

      // Generalmente, un valor se puede definir:

      // Con llaves ({ }): Se usan para pasar expresiones de JavaScript que 
      // necesitan ser evaluadas (según el tipo de dato).
      // Sin llaves: Se usa para pasar valores estáticos como string directamente.
      id={1}
      title='Hola Mundo'

    // Al sumar un valor al id, si id pasa como un String, se concatenará en 
    // lugar de sumarse numéricamente. La propiedad id es de tipo number
    />
  </React.StrictMode>
)
