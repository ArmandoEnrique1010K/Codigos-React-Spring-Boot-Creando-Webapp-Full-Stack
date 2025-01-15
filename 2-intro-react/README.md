# 2-intro-react

## React

React es una biblioteca de JavaScript especializada en el desarrollo de interfaces de usuario para aplicaciones web. Aunque a veces se le denomina "framework", es más preciso llamarlo una biblioteca o librería.

## Características principales de React

- **JSX (JavaScript XML)**: Permite escribir interfaces de usuario con una sintaxis similar a HTML dentro de JavaScript, facilitando el desarrollo.

- **Virtual DOM**: Optimiza el rendimiento al actualizar solo las partes del DOM (Document Object Model) que han cambiado.

- **Componentes**: Posee una estructura basada en componentes reutilizables que encapsulan su propio estado y comportamiento.

- **Flujo de datos unidireccional**: Simplifica la depuración y el mantenimiento al hacer que los datos fluyan en una sola dirección.

- **Declarativo**: Describe cómo debería verse la interfaz en cada momento y actualiza automáticamente los componentes cuando los datos cambian.

- **Herramientas y librerías asociadas**: Incluye herramientas como React Router para la gestión de rutas y Axios para peticiones HTTP.

- **Versatilidad**: Es utilizado para desarrollar aplicaciones web, móviles (con React Native) y fullstack (con Next.js).

## Tipos de depedencias en el proyecto

- Las dependencias principales del proyecto, `react` y `react-dom`, incluyen tanto dependencias asociadas como independientes. El archivo `package.json` distingue entre dependencias de producción (dependencies) y dependencias de desarrollo (devDependencies).

- Al construir el proyecto para producción con Vite, solo las dependencias de producción se incluirán en el bundle final, optimizando así el proyecto. Vite también compila el código moderno de JavaScript (ES6+) a JavaScript nativo compatible con los navegadores.

## Manipulación del DOM en React

- React trabaja detrás del DOM, convirtiendo componentes con etiquetas HTML a JavaScript y manipulando el DOM para renderizarlos. Simplifica el trabajo con vistas y plantillas usando etiquetas HTML que se convierten en código JavaScript, formando un árbol de estructura HTML y renderizándolo en el navegador.

- JSX permite escribir código que se parece mucho a HTML, pero que se convierte en llamadas a funciones de JavaScript en tiempo de compilación. Esto facilita la creación y manipulación de componentes en React.

## Convertir etiquetas HTML en JSX con Babel JS

El uso de etiquetas HTML directamente en React puede parecer extraño al principio, ya que parece que se están mezclando dos lenguajes diferentes. Babel es una herramienta que permite transformar el JavaScript moderno, incluido el JSX, en un código que pueda ser interpretado por todos los navegadores.

### Pasos para convertir HTML a JSX con Babel

1. Visita [BabelJS.io](https://babeljs.io/), ve a la barra de menú y haz clic en la opción Try it out.

2. En la sección Preset, marca la opción React y en React runtime, elige Classic.

## Carpeta components

Es una buena práctica organizar el proyecto en carpetas. Dentro de la carpeta raíz src, crea una subcarpeta llamada components para almacenar los modulos de tipo componente.

Es importante tener en cuenta que los nombres de los archivos JSX utilizan la notación UpperCamelCase. Se recomienda evitar cambiar el nombre de los archivos creados para no tener inconvenientes al momento de ejecutar el proyecto.

## Visualizar los componentes con React Developer Tools

En las herramientas de desarrollo del navegador (al pulsar F12), busca la sección Components para ver una lista de los componentes de React que están presentes en la página. En este caso, selecciona el componente HelloWorldApp para expandirlo y visualizar todas sus propiedades definidas con sus respectivos valores.

## CONTINUA EN 06