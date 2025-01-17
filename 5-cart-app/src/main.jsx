import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartApp } from './CartApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Habilita el sistema de enrutado de React Router en la aplicación */}
    <BrowserRouter>
      <CartApp />
    </BrowserRouter>
  </React.StrictMode>
)
