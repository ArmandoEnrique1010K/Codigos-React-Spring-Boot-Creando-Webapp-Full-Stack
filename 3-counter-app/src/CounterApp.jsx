import { useState } from "react";

export const CounterApp = ({ value }) => {

    // Variable de estado (state) counter utilizando el hook useState, incluye una }
    // función setCounter para actualizar el estado

    // Su valor por defecto esta dado por la propiedad value
    const [counter, setCounter] = useState(value);

    // Función para incrementar el contador, setCounter sirve para actualizar el 
    // estado en base al argumento.

    // Mediante una función de flecha, toma el valor actual de counter y lo 
    // incrementa en 1
    const counterIncrement = () => setCounter(c => c + 1);

    return <>
        {/* Muestra el valor actual del state counter */}
        <h2>El valor del contador es {counter}</h2>

        {/* Recuerda que <button></button> sirve para añadir un botón, además se 
        incluye un evento onClick que contiene un callback o función de flecha 
        sin argumentos que se ejecuta cuando el usuario hace clic en él */}
        <button onClick={counterIncrement} >incrementar contador +1</button>
    </>
}