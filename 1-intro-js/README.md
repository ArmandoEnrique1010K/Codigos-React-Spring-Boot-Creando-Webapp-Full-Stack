# 01 Intro-js

## Instalaciones y herramientas del curso

- Google Chrome
- React Developer Tools (extensión de Chrome)
- Visual Studio Code
- Node.js
- La consola de Chrome (pulsa F12 en el navegador de Chrome y ve a la sección "console")

### Extensiones de VSCode

- ES7+ React/Redux/React-Native snippets
- Simple React Snippets
- Auto Close Tag
- Auto Rename Tag
- Material Icon Theme
- One Dark Pro

### Comandos para verificar la instalación de Node.js y NPM

```powershell
"node --version"
"node -v"
"npm --version"
"npm -v"
```

## Vite

- Vite es una herramienta de compilación rápida y eficiente para la construcción de aplicaciones frontend.

- Es popular por su rendimiento y enfoque en la instalación de dependencias, en comparación con Create React App.

### Comandos para crear un proyecto

- `cd <<Ruta hacia la carpeta>>`: Navega hacia la carpeta de proyectos (tambien puedes optar arrastrando la carpeta hacia la consola)

- `npm create vite@latest`: Crea un proyecto con Vite (puede solicitar pulsar la tecla `y` para utilizar la ultima versión de vite). Luego introduce lo siguiente
  
  - Name proyect: `01-intro-js`
  
  - Framework: `React`
  
  - Language: `JavaScript`

- `cd 01-intro-js`: Navega hacia la carpeta de proyecto

- `ls`: Lista los archivos y carpetas en la ubicación actual (se puede utilizar para verificar que exista el archivo `package.json`)

- `npm install`: Instala las dependencias del proyecto (se encuentran en `package.json`)

### Importar el proyecto hacia VSCode

- Existe 2 formas:
  
  1. Arrastra la carpeta del proyecto (en este caso `01-intro-js`) a la ventana de VSCode.
  
  2. En VSCode, clic en el menú `File`, opción `Open Folder` y selecciona la carpeta raíz del proyecto

**Nota**: Luego de importar aparece un cuadro de diálogo preguntando "Do you trust the authors of the files in this folder?", solamente haz clic en Yes, I trust the autors, para permitir modificaciones en el código fuente del proyecto.

### Iniciar el servidor de desarrollo

1. Clic en el menú `Terminal`, opción `New Terminal`, abre una terminal configurada con la ruta del proyecto

2. Ejecuta el comando `npm run dev`, esto levantara el servidor web de desarrollo, que esta definido en el archivo `package.json` bajo scripts: `{ "dev": "vite" }`

3. Accede a la dirección predeterminada de Vite: `http://localhost:5173/` en tu navegador

### Detener la ejecución del servidor

- Pulsa 2 veces `CTRL + C` en la terminal en la que se esta ejecutando el proyecto

## Estructura de la aplicación

Toda aplicación de React generada con Vite, poose la siguiente estructura:

- `node_modules`: librerías y dependencias instaladas generadas después de ejecutar npm install.

- `public`: recursos estáticos como imágenes y archivos JavaScript personalizados.

- `src`: todo el código de la aplicación React escrito en JavaScript.

- `index.html`: Actúa como el punto de entrada principal para la aplicación React.

- `package.json`: la lista de dependencias y scripts del proyecto.

- `vite.config.js`: configuraciones de Vite como plugins, alias y configuraciones de servidor de desarrollo.

### Limpiar el proyecto

1. Borra los archivos `app.css`, `app.jsx`, `index.css` y la carpeta `assets`. En VSCode, puedes seleccionar varios archivos manteniendo pulsada la tecla `CTRL`, haz clic derecho y selecciona `Delete`.

2. Borra todo el código fuente contenido en `main.jsx` y luego renombra ese archivo a `main.js`.

3. En el archivo `index.html`, cambia el valor del atributo `src` de la etiqueta `<script>` para que apunte a `main.js` en lugar de `main.jsx`.

4. Guarda los cambios pulsando la combinación de teclas `CTRL + S` en ambos archivos.
