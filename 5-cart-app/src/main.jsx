import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartApp } from './CartApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Habilita el sistema de rutas de React Router Dom */}
    <BrowserRouter>
      <CartApp />
    </BrowserRouter>
  </React.StrictMode>
)
