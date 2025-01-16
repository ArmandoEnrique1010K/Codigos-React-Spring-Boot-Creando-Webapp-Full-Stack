# 4-invoice-app

## Estructura de carpetas

- Components: Archivo de tipo componentes.

- Data: Archivos de tipo .js que contiene datos estaticos

- Services: Archivos para manipular los datos.

## Bootstrap

Bootstrap es un framework responsivo que facilita el diseño adaptable para diferentes dispositivos, ofreciendo herramientas listas para usar en **CSS3** y **JavaScript**.

### Uso del CDN de Boostrap

1. Ve a la página oficial de [Bootstrap](https://getbootstrap.com/) y selecciona la sección **"Download"**.

2. Busca el apartado **"CDN via jsDelivr"** y copia el enlace de la etiqueta `<link>` correspondiente al archivo **`bootstrap.min.css`**.

3. Abre tu archivo **`index.html`** y pega el enlace dentro de las etiquetas `<head></head>`.

Al incluir el CDN, los estilos predefinidos de Bootstrap estarán disponibles para todos los componentes en tu aplicación, aplicándose automáticamente. Esto simplifica la creación de diseños responsivos y estilizados sin necesidad de escribir CSS desde cero.

## Estilos de Boostrap

En React, utiliza la propiedad `className` en lugar del atributo `class` para aplicar clases de estilo.

list-group

list-group-item



container



table

table-striped

table-hover



row

col



card

card-header

card-body





m-3

my-3

w-50

text-end

badge bg-success



form-control

btn btn-primary 



**Tip**: En VSCode, puedes activar multicursor pulsando la tecla **ALT** y luego haciendo clic en varios "puntos" en el código fuente para escribir el mismo código en varias líneas simultáneamente.



El comando `npm i prop-types` para instalar Prop-Types

---

METODO REDUCE

Luego, utiliza el método `reduce` después de `map` para sumar los valores del nuevo arreglo obtenido. En este caso el método `reduce` se utiliza para acumular un total, aceptando dos argumentos:

- Una función de flecha que contiene dos parámetros:
  
  - **`accumulator`**: El valor acumulado de todas las iteraciones anteriores.
  
  - **`currentValue`**: El valor del elemento actual que se está procesando.

- El valor inicial del acumulador, que comienza en 0 y se incrementa con cada valor del arreglo.



USE EFFECT

La función `getInvoice` se ejecuta cada vez que el componente se renderiza, lo cual es ineficiente, especialmente si esta función realiza una solicitud a un servidor remoto.

Para visualizar este problema, define una constante `invoice` para almacenar el objeto que devuelve `getInvoice`. Luego, imprime esta constante con `console.log` para observar cuántas veces se invoca la función.

```jsx
import { useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {

    // Almacena el resultado de getInvoice en una constante
    const invoice = getInvoice();
    // Imprime el objeto invoice en la consola
    console.log(invoice);

    return (
        <>
            <div className="container">

                {/* ... */}

            </div >
        </>
    )
}


```

Para mejorar la eficiencia, usa el hook `useEffect` para manejar el ciclo de vida del componente.


