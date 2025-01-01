// OBJETOS EN JAVASCRIPT MODERNO

// Los objetos en JavaScript son estructuras de datos clave que permiten agrupar datos y funcionalidades relacionadas. Son similares a los objetos JSON usados en APIs REST y forman la base para muchos patrones y técnicas en JavaScript.

// Los objetos se definen utilizando llaves {} y pueden contener múltiples pares de propiedad y valor. Cada par se separa por una coma y los valores pueden ser cambiados dinámicamente.

// Un objeto puede servir como prototipo para crear otros objetos, clonar o instanciar.
const invoice = {
  id: 10,
  name: "Compras de oficina",

  // El constructor new Date() se utiliza para obtener la fecha y hora actual
  date: new Date(),

  // Un objeto puede contener otro objeto como una de sus propiedades, permitiendo construir estructuras jerárquicas.
  client: {
    id: 2,
    name: "Jhon",
    lastName: "Doe",
    age: 20,
  },

  // Los objetos en JavaScript pueden tener propiedades que son arreglos. Estos arreglos pueden contener una lista de objetos, y típicamente, generalmente cada objeto en la lista tiene las mismas propiedades. Esto es útil para representar colecciones de datos relacionados.
  items: [
    {
      producto: "keyboard",
      price: 399,
      quantity: 2,
    },
    {
      producto: "mouse",
      price: 200,
      quantity: 1,
    },
    {
      producto: "paper",
      price: 100,
      quantity: 10,
    },
  ],

  // Los métodos son funciones asociadas a un objeto. Se pueden definir dentro del objeto como cualquier otra propiedad.
  greeting: function () {
    // Utiliza la palabra clave this para referirse al objeto en el que están definidos.
    return `Hola ${this.client.name}`;
  },

  // No se recomienda usar funciones de flecha como métodos de objetos, si necesitas acceder a las propiedades del objeto con this, puedes optar por el nombre del objeto.
  // greeting: () => {
  //   return `Hola ${invoice.client.name}`;
  // },

  // Método para calcular el precio total de la factura
  total: function () {
    // Inicializa la variable total
    let total = 0;

    // El método forEach es comúnmente utilizado para iterar sobre los elementos de un arreglo y realizar una operación específica en cada uno.

    // El parametro item representa cada elemento del arreglo items
    this.items.forEach((item) => {
      // Calcula el total multiplicando el precio por la cantidad de cada item. El resultado se le suma al nuevo total
      total = total + item.price * item.quantity;
    });

    return total;
  },
};

// Para acceder a las propiedades de un objeto, usa la notación de punto . seguida del nombre de la propiedad.

// Puedes cambiar el valor de una propiedad asignando un nuevo valor con la notación de punto. Esto es flexible y directo, similar a los métodos set en otros lenguajes.
// invoice.client.name = 'Pepe';
// invoice.total = 5000;

// Cuando se imprime un objeto, la consola del navegador muestra su estructura completa y las propiedades se despliegan en orden alfabético.
console.log(invoice);

// Asigna el valor devuelto por el método greeting del objeto invoice a una constante
const greeting = invoice.greeting();
console.log(greeting);

// Imprime el valor devuelto por el método total
console.log("Total: " + invoice.total());
