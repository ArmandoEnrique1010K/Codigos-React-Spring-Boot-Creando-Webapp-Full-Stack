import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Pasa un valor en la propiedad value al componente CounterApp */}
    <CounterApp value={7} />
  </React.StrictMode>
)
