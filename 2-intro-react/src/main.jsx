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

    // Si se define solamente la propiedad title sin un valor asignado, es 
    // equivalente a title={true}.

    // En React, si pasas una propiedad de tipo boolean a un componente, no se 
    // mostrará el valor en la vista. En su lugar, puedes utilizar una condición 
    // con un operador ternario para renderizar contenido basado en esa propiedad.
    />
  </React.StrictMode>
)
