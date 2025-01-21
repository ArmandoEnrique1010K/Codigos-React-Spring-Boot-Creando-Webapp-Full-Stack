# backend-usersapp

### **Métodos CRUD Automáticos en Spring Data JPA**

Spring Data JPA simplifica enormemente las operaciones CRUD al proporcionar métodos predefinidos que no requieren implementación manual. Estos métodos están disponibles al extender la interfaz `CrudRepository` o sus derivados como `JpaRepository`.

### Ejemplo:

Se tiene la siguiente entidad

```java
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Garantiza que el campo username sea único en la base de datos
    @Column(unique = true) 
    private String username;

    private String email;
    private String password;

    // Getters y setters
}
```

A continuación, defines un repositorio para manejar las operaciones relacionadas con `User`:

```java
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    // Puedes agregar métodos personalizados si lo necesitas
    User findByUsername(String username);
}
```

### Métodos CRUD Automáticos Disponibles

Al extender `CrudRepository`, obtienes los siguientes métodos listos para usar:

- **`save(S entity)`**: Guarda una nueva entidad o actualiza una existente.

- **`findById(ID id)`**: Encuentra una entidad por su ID.

- **`findAll()`**: Obtiene una lista de todas las entidades en la tabla.

- **`deleteById(ID id)`**: Elimina una entidad por su ID.

### La "Magia" de JPA y Hibernate

Spring Data JPA se basa en JPA (Java Persistence API) y utiliza Hibernate como implementación predeterminada para manejar la persistencia de datos. Esta integración ofrece múltiples beneficios:

1. **Mapeo Objeto-Relacional (ORM)**:
   
   - Hibernate traduce las clases de Java y sus relaciones en tablas y consultas SQL. Por ejemplo:
     - Una clase `User` con atributos como `id`, `username` y `email` se convierte en una tabla `users` con columnas correspondientes.

2. **Consultas SQL Automáticas**:
   
   - Métodos como `save` o `findById` generan automáticamente las consultas SQL necesarias para interactuar con la base de datos según el dialecto configurado en `application.properties`.

3. **Configuración de Dialecto SQL**:
   
   - El dialecto determina cómo Hibernate traduce las operaciones a instrucciones SQL compatibles con tu base de datos.
   
   - Ejemplo: `spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect`

### ORM: La Base de Todo

ORM (Object-Relational Mapping) es una técnica que permite trabajar con la base de datos como si fuera un conjunto de objetos en lugar de usar consultas SQL directamente. Los beneficios incluyen:

- Reducción de código repetitivo.
- Mantenimiento más sencillo gracias a la programación orientada a objetos.
- Portabilidad entre diferentes bases de datos con cambios mínimos en la configuración.

## Implementación de un Servicio para Métodos CRUD

Una buena práctica al desarrollar con Spring Boot es implementar un **servicio intermedio** entre los controladores y los repositorios. Esto permite desacoplar la lógica de negocio de la lógica de acceso a datos.

### Definición de la Interfaz del Servicio

Crea una interfaz que defina los métodos que tu servicio debe implementar. Por ejemplo:

```java
package com.example.backendcartapp.services;

import com.example.backendcartapp.models.entities.User;
import java.util.List;
import java.util.Optional;

public interface UserService {

    // Métodos CRUD básicos
    User save(User user);
    Optional<User> findById(Long id);
    List<User> findAll();
    void deleteById(Long id);

    // Métodos personalizados
    Optional<User> findByUsername(String username);
}
```

### Implementación del Servicio

Crea una clase que implemente esta interfaz. Al hacerlo, tu IDE puede ayudarte a generar automáticamente los métodos de la interfaz.

```java
package com.example.backendcartapp.services.impl;

import com.example.backendcartapp.models.entities.User;
import com.example.backendcartapp.repositories.UserRepository;
import com.example.backendcartapp.services.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return Optional.ofNullable(userRepository.findByUsername(username));
    }
}
```

### Atajos en VSCode para Agregar Métodos de Forma Automática

Si estás usando un IDE como **Visual Studio Code**, puedes facilitar la implementación de los métodos de la interfaz siguiendo estos pasos:

1. **Usar el Menú Contextual**:
   
   - Haz clic derecho en el código dentro de tu clase `UserServiceImpl`.
   - Selecciona **Source Action...** > **Override/Implement Methods...**.
   - Aparecerá un listado de métodos definidos en la interfaz `UserService`. Selecciona los que deseas implementar y presiona **OK**.

2. **Usar el Atajo de Teclado**:
   
   - Coloca el cursor sobre el nombre de la clase `UserServiceImpl`.
   - Presiona **CTRL + .** (o CMD + . en macOS).
   - Selecciona **Add unimplemented methods** en el menú de **Quick Fix**.
   - Esto generará automáticamente los métodos no implementados en tu clase.

## Ruta Dinámica en el Controlador

El controlador `UserController` implementa rutas dinámicas que permiten interactuar con usuarios específicos según el ID proporcionado en la URL. A continuación, se detallan los aspectos clave y ejemplos prácticos de implementación.

### 1. Ruta dinámica utilizando `@PathVariable`

El método `show` mapea la ruta `GET /users/{id}` donde `{id}` es una variable dinámica que se extrae mediante la anotación `@PathVariable`.

```java
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/{id}")
    public User show(@PathVariable Long id) {
        // orElseThrow -> Manejo directo de ausencia de datos.
        return service.findById(id).orElseThrow(); 
    }
}
```

**Notas:**

- Si no se encuentra el usuario, `orElseThrow()` lanza una excepción como `NoSuchElementException` por defecto.
- Puedes personalizar la excepción si necesitas un mensaje específico o manejar un caso más particular.

### 2. Utilizando `@PathVariable(name = "id")`

Es posible especificar explícitamente el nombre del parámetro en la URL para evitar errores de coincidencia en rutas complejas o por convención.

```java
@GetMapping("/{id}")
public User show(@PathVariable(name = "id") Long idUser) {
    return service.findById(idUser).orElseThrow();
}
```

Aunque no es obligatorio si el nombre coincide, esta práctica puede ser útil para aumentar la legibilidad del código.

### 3. Devolver respuestas completas con `ResponseEntity`

En lugar de devolver directamente un objeto `User`, puedes usar `ResponseEntity` para proporcionar una respuesta más robusta, incluyendo códigos de estado HTTP.

```java
@GetMapping("/{id}")
public ResponseEntity<?> show(@PathVariable Long id) {
    Optional<User> userOptional = service.findById(id);

    if (userOptional.isPresent()) {
        // HTTP 200 con el usuario encontrado.
        return ResponseEntity.ok(userOptional.get()); 
    }

    // HTTP 404 si el usuario no existe.
    return ResponseEntity.notFound().build(); 
}
```

**Ventajas:**

- **Mejor manejo de errores:** Devuelve códigos HTTP precisos (`200 OK`, `404 Not Found`).
- **Flexibilidad:** Permite incluir cabeceras o modificar la respuesta.

### **4. Configuración personalizada para errores (Opcional)**

Puedes lanzar una excepción personalizada si el usuario no existe y manejarla globalmente en tu aplicación.

```java
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
```

```java
@GetMapping("/{id}")
public User show(@PathVariable Long id) {
    return service.findById(id).orElseThrow(() -> 
        new UserNotFoundException("User not found with ID: " + id)
    );
}
```

## Método POST: Crear un Usuario

El método POST en el controlador permite crear un nuevo usuario recibiendo un objeto `User` en el cuerpo de la petición. Este objeto se almacena en la base de datos utilizando el servicio correspondiente.

### **1. Implementación básica con `@ResponseStatus`**

En esta implementación, el método devuelve el usuario creado y utiliza la anotación `@ResponseStatus` para indicar un estado HTTP 201 (Created).

```java
@PostMapping
@ResponseStatus(HttpStatus.CREATED) // Indica que el estado HTTP de la respuesta es 201.
public User create(@RequestBody User user) {
    return service.save(user); // Guarda el usuario en la base de datos y lo devuelve.
}
```

**Ventajas:**

- Simple y directo.
- Estado HTTP 201 es automático gracias a `@ResponseStatus`.

**Consideración:**

- No permite incluir cabeceras adicionales ni personalizar más allá del cuerpo de la respuesta.

### 2. Implementación avanzada con `ResponseEntity`

Para una respuesta más personalizada, puedes usar `ResponseEntity`. Esto te permite controlar tanto el código de estado como el cuerpo y, opcionalmente, añadir cabeceras HTTP.

```java
@PostMapping
public ResponseEntity<?> create(@RequestBody User user) {
    // Guarda el usuario en la base de datos.
    User userDb = service.save(user);

    // Devuelve una respuesta con estado 201 y el usuario creado en el cuerpo.
    return ResponseEntity.status(HttpStatus.CREATED).body(userDb);
}
```

**Ventajas:**

- Permite personalizar completamente la respuesta.
- Más flexible si en el futuro necesitas añadir cabeceras o estados diferentes.

## Actualizar un recurso existente en la base de datos (PUT)

El método `update` busca un recurso en la base de datos por su identificador (`id`) y, si se encuentra, actualiza ciertos campos permitidos del objeto, como `username` y `email`. Si el recurso no existe, devuelve un error HTTP 404 (`Not Found`).

```java
@PutMapping("/{id}")
public ResponseEntity<?> update(@RequestBody User user, @PathVariable Long id) {
    // Busca el recurso en la base de datos
    Optional<User> o = service.findById(id);

    // Verifica si el recurso existe
    if (o.isPresent()) {
        User userDb = o.orElseThrow(); // Obtiene el usuario desde el Optional

        // Actualiza solo los campos permitidos
        userDb.setUsername(user.getUsername());
        userDb.setEmail(user.getEmail());

        // Guarda el recurso actualizado en la base de datos
        User updatedUser = service.save(userDb);

        // Devuelve una respuesta con el recurso actualizado
        return ResponseEntity.ok(updatedUser); // HTTP 200 OK
    }

    // Devuelve un error 404 si el recurso no se encuentra
    return ResponseEntity.notFound().build();
}
```

#### **Notas importantes:**

- Se utiliza `ResponseEntity.ok()` para devolver el recurso actualizado con un estado HTTP 200 (`OK`).
- Solo los campos `username` y `email` se actualizan. Otros campos sensibles, como `password`, no se modifican por razones de seguridad.
- Si el recurso no existe (`Optional.isPresent()` es falso), se devuelve un estado HTTP 404.

### Eliminar un recurso existente en la base de datos (DELETE)

El método `remove` elimina un recurso existente de la base de datos por su identificador (`id`). Si el recurso no existe, devuelve un error HTTP 404 (`Not Found`).

```java
@DeleteMapping("/{id}")
public ResponseEntity<?> remove(@PathVariable Long id) {
    // Busca el recurso en la base de datos
    Optional<User> o = service.findById(id);

    // Verifica si el recurso existe
    if (o.isPresent()) {
        // Elimina el recurso por su ID
        service.remove(id);

        // Devuelve una respuesta HTTP 204 (No Content) si se eliminó correctamente
        return ResponseEntity.noContent().build();
    }

    // Devuelve un error 404 si el recurso no se encuentra
    return ResponseEntity.notFound().build();
}
```

#### **Notas importantes:**

- El estado HTTP 204 (`No Content`) indica que el recurso fue eliminado correctamente y no hay contenido en la respuesta.
- Si el recurso no existe, devuelve un estado HTTP 404 (`Not Found`).

## Diferencia entre controlador y servicio

La separación entre el controlador y el servicio es crucial para mantener un código limpio, modular y fácil de mantener. El objetivo principal del controlador es manejar solicitudes HTTP y delegar la lógica de negocio al servicio. Aquí explicamos las diferencias y cómo la refactorización propuesta mejora el diseño.

| **Aspecto**                | **Controlador**                                                                                        | **Servicio**                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Responsabilidad**        | Manejar solicitudes HTTP, procesar parámetros de la ruta, cuerpo de la petición y preparar respuestas. | Encapsular la lógica de negocio, realizar operaciones con los datos y manejar la interacción con la base de datos. |
| **Nivel de abstracción**   | Interactúa directamente con el cliente (interfaz pública de la API).                                   | Se centra en la lógica de negocio y las operaciones de datos (detrás de escena).                                   |
| **Ejemplo de operaciones** | Validar datos de entrada, definir las rutas y devolver respuestas HTTP.                                | Consultar la base de datos, realizar cálculos, manejar reglas de negocio y coordinar transacciones.                |

### Refactorización del método `update`

#### Implementación en el Servicio (`UserService`)

El servicio se encarga de toda la lógica relacionada con la actualización de un recurso, como buscar el usuario, verificar su existencia, actualizar los campos y guardar los cambios en la base de datos.

```java
@Override
@Transactional
public Optional<User> update(User user, Long id) {
    // Busca el usuario por su ID
    Optional<User> o = this.findById(id);

    // Define el objeto para el resultado de la operación
    User userOptional = null;

    // Si el usuario existe, actualiza sus campos
    if (o.isPresent()) {
        User userDb = o.orElseThrow();
        userDb.setUsername(user.getUsername());
        userDb.setEmail(user.getEmail());

        // Guarda los cambios y asigna el resultado
        userOptional = this.save(userDb);
    }

    // Devuelve un Optional con el resultado
    return Optional.ofNullable(userOptional);
}
```

### Implementación en el Controlador

El controlador simplemente llama al servicio y gestiona la respuesta HTTP, sin involucrarse en la lógica de negocio. Esto simplifica y limpia el código.

```java
@PutMapping("/{id}")
public ResponseEntity<?> update(@RequestBody User user, @PathVariable Long id) {
    // Llama al método `update` del servicio
    Optional<User> o = service.update(user, id);

    // Si el recurso se actualizó correctamente
    if (o.isPresent()) {
        // Devuelve el recurso actualizado con el estado HTTP 201 (Created)
        return ResponseEntity.status(HttpStatus.CREATED).body(o.orElseThrow());
    }

    // Si no se encontró el recurso, devuelve un error 404
    return ResponseEntity.notFound().build();
}
```

## Diferencia entre repository y this en el servicio

### 1. Usar `repository` directamente

Cuando usas `repository` en la capa de servicio, estás accediendo directamente a los métodos del repositorio (que son proporcionados por Spring Data JPA, como `save`, `findById`, `deleteById`, etc.). Esto es lo más común en la mayoría de los casos.

```java
@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User save(User user) {
        return repository.save(user);
    }
}
```

**Ventajas:**

- **Claro y explícito:** Es evidente que el repositorio está gestionando la interacción con la base de datos.
- **Control preciso:** Puedes usar los métodos del repositorio directamente y, si es necesario, añadir consultas personalizadas (`@Query`).

**Desventajas:**

- Si necesitas lógica adicional antes de guardar o recuperar un dato, debes implementarla manualmente en el servicio.

### 2. Usar `this` dentro de la misma clase

Cuando usas `this` en la capa de servicio, estás llamando a un método definido en la misma clase. Esto puede incluir llamadas indirectas a los métodos del repositorio, pero no interactúas directamente con él.

```java
@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User save(User user) {
        // Llama a otro método de la misma clase
        return this.processAndSave(user);
    }

    private User processAndSave(User user) {
        // Agrega lógica adicional antes de guardar
        user.setUsername(user.getUsername().toLowerCase());
        return repository.save(user);
    }
}
```

**Ventajas:**

- **Encapsulación:** Puedes envolver la lógica de negocio antes de llamar al repositorio.
- **Reutilización interna:** Es útil cuando necesitas separar la lógica en métodos pequeños dentro de la misma clase.

**Desventajas:**

- Si necesitas proxy dinámico (como transacciones), `this` no lo aplicará automáticamente porque Spring no intercepta llamadas internas de la misma clase.

### **3. Usar `this` vs. `repository` con transacciones**

Un caso importante a considerar es cuando se trabaja con transacciones (`@Transactional`). Spring usa proxies dinámicos para manejar las transacciones, pero **las llamadas internas a métodos dentro de la misma clase** (usando `this`) no serán interceptadas por el proxy, y la transacción no funcionará como esperas.

```java
@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Transactional
    public void performOperation() {
        // Esto será transaccional
        this.save(new User());
    }

    @Transactional
    public User save(User user) {
        // Esto NO será transaccional si se llama desde otro método usando `this`
        return repository.save(user);
    }
}
```

En este caso, **si usas `repository` directamente o llamas al método desde fuera de la clase (por ejemplo, desde el controlador), el proxy sí aplicará la transacción**.

## Pruebas iniciales

Las pruebas iniciales en **Postman** son esenciales para verificar el correcto funcionamiento de los endpoints creados.

### Preparación previa

1. **Base de datos:**
   
   - Asegúrate de haber creado la base de datos en MySQL utilizando el nombre especificado en `application.properties`.
     
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/db_users_springboot
     spring.datasource.username=root
     spring.datasource.password=admin
     spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
     spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
     spring.jpa.show-sql=true
     
     # TIP: primero ejecuta la aplicación y luego mientras se esta ejecutando, cambia create por update para mantener los datos
     spring.jpa.hibernate.ddl-auto=create
     logging.level.org.hibernate.SQL=debug
     ```
   
   - En MySQL Workbench, ejecuta el siguiente comando para verificar que la tabla está vacía:
     
     ```sql
     SELECT * FROM db_users_springboot.users;
     ```

2. **Ejecuta el proyecto:**
   
   - Corre la aplicación Spring Boot. Por defecto, estará disponible en `http://localhost:8080`.

### Pruebas en Postman

#### 1. Prueba inicial del endpoint GET (/users)

- **Método:** GET

- **Ruta:** `http://localhost:8080/users`

- **Resultado esperado:** Un arreglo vacío si no hay usuarios creados.

- **Respuesta esperada:**
  
  ```json
  []
  ```

#### 2. Prueba del endpoint GET por ID (/users/{id})

- **Método:** GET

- **Ruta:** `http://localhost:8080/users/1`

- **Caso 1: Usuario no encontrado.**
  
  - **Resultado esperado:** Código HTTP 404 (`Not Found`)
  - **Respuesta esperada:** Vacía.

- **Caso 2: Usuario encontrado.**
  
  - Si existe un usuario con el ID `1`, devuelve los datos del usuario:
    
    ```json
    {
      "id": 1,
      "username": "pepe",
      "email": "pepe@correo.com",
      "password": "12345"
    }
    ```

#### 3. Prueba del endpoint POST (Crear usuario)

- **Método:** POST

- **Ruta:** `http://localhost:8080/users`

- **Body:**
  
  - Selecciona **Body > raw** y configura el tipo como **JSON**.
  
  - Envía un JSON con los datos del nuevo usuario:
    
    ```json
    {
      "username": "pepe",
      "email": "pepe@correo.com",
      "password": "12345"
    }
    ```

- **Resultado esperado:**
  
  - Código HTTP 201 (`Created`).
  
  - Respuesta con el usuario creado (incluye el ID asignado):
    
    ```json
    {
      "id": 1,
      "username": "pepe",
      "email": "pepe@correo.com",
      "password": "12345"
    }
    ```

- **Verificación:**
  
  - En MySQL Workbench, ejecuta nuevamente:
    
    ```sql
    SELECT * FROM db_users_springboot.users;
    ```
  
  - Deberías ver el nuevo registro en la tabla.

#### 4. Prueba del endpoint PUT (Actualizar usuario)

- **Método:** PUT

- **Ruta:** `http://localhost:8080/users/1`

- **Body:**
  
  - Envía un JSON sin incluir el campo `password`:
    
    ```json
    {
      "username": "pepe_updated",
      "email": "pepe_updated@correo.com"
    }
    ```

- **Caso 1: Usuario encontrado.**
  
  - **Resultado esperado:** Código HTTP 201 (`Created`).
  
  - **Respuesta esperada:** El usuario actualizado:
    
    ```json
    {
      "id": 1,
      "username": "pepe_updated",
      "email": "pepe_updated@correo.com",
      "password": "12345"
    }
    ```
  
  - **Verificación:** Realiza una petición GET al mismo ID (`/users/1`) para confirmar los cambios.

- **Caso 2: Usuario no encontrado.**
  
  - **Resultado esperado:** Código HTTP 404 (`Not Found`).
  - **Respuesta esperada:** Vacía.

#### 5. Prueba del endpoint DELETE (Eliminar usuario)

- **Método:** DELETE

- **Ruta:** `http://localhost:8080/users/1`

- **Body:** No envíes ningún cuerpo (vacío).

- **Caso 1: Usuario encontrado.**
  
  - **Resultado esperado:** Código HTTP 204 (`No Content`).
  - **Respuesta esperada:** Vacía.
  - **Verificación:** Realiza una petición GET al mismo ID (`/users/1`) y debería devolver un código HTTP 404.

- **Caso 2: Usuario no encontrado.**
  
  - **Resultado esperado:** Código HTTP 404 (`Not Found`).
  - **Respuesta esperada:** Vacía.

### Puntos importantes

1. **Verificación en MySQL Workbench:**
   
   - Después de cada operación, verifica el estado de la tabla con:
     
     ```sql
     SELECT * FROM db_users_springboot.users;
     ```

2. **Manejo de errores:**
   
   - Asegúrate de que las respuestas de error (`404 Not Found`) sean coherentes según lo esperado.

3. **Tipos de datos en JSON:**
   
   - Utiliza cadenas de texto para los campos `username`, `email` y `password`.

4. **Uso de ResponseEntity:**
   
   - Verifica que los códigos de estado HTTP (`201`, `404`, `204`) coincidan con lo definido en el controlador.

### Resultados esperados por escenario

| **Método** | **Ruta**   | **Entrada**                        | **Resultado esperado** |
| ---------- | ---------- | ---------------------------------- | ---------------------- |
| **GET**    | `/users`   | N/A                                | `[]`                   |
| **GET**    | `/users/1` | N/A                                | 404 o el usuario       |
| **POST**   | `/users`   | JSON con `username`, `email`, etc. | Usuario creado (201)   |
| **PUT**    | `/users/1` | JSON con campos actualizados       | Usuario actualizado    |
| **DELETE** | `/users/1` | N/A                                | 204 o 404              |

Con estas pruebas iniciales, podrás validar que los endpoints funcionan según lo esperado y cumplen con las reglas de negocio establecidas.

---

## Validaciones

En el código mostrado, se implementan validaciones en los campos de la clase `User` para garantizar que los datos sean correctos antes de persistirlos en la base de datos.

### 1. Dependencia para Validación

La dependencia `spring-boot-starter-validation` añade soporte para el marco de validación de Java Bean Validation, que está basado en las especificaciones **Jakarta Validation** (anteriormente Javax). Esto incluye un conjunto estándar de anotaciones como `@NotNull`, `@NotEmpty`, `@Size`, entre otras, para validar los datos de entrada.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

### 2. Validaciones Implementadas

#### @NotBlank

- Valida que un campo de tipo `String` no sea `null`, esté vacío, ni contenga solo espacios en blanco.

#### @Size

- Restringe la longitud de una cadena (o el tamaño de una colección).

```java
@NotBlank
@Size(min = 4, max = 8)
private String username;
```

#### @NotEmpty

- Valida que un campo no sea `null` ni una cadena vacía (`""`).
- Es menos estricta que `@NotBlank` porque permite cadenas con espacios en blanco.

```java
@NotEmpty
private String password;
```

#### **@Email**

- Valida que el campo contenga un formato válido de dirección de correo electrónico.
- Debe ser usado junto con `@NotEmpty` para evitar valores `null` o cadenas vacías.

#### **@Column(unique = true)**

- Define que el valor del campo debe ser único en la base de datos.

```java
@Email
@NotEmpty
@Column(unique = true)
private String email;
```

### 3. Personalización de mensajes de error

Puedes personalizar los mensajes de validación usando el atributo `message` en las anotaciones. Por ejemplo:

```java
@NotBlank(message = "El nombre de usuario no puede estar vacío ni contener solo espacios en blanco.")
@Size(min = 4, max = 8, message = "El nombre de usuario debe tener entre 4 y 8 caracteres.")
private String username;
```

Si la validación falla, este mensaje personalizado será incluido en la respuesta de error.

### 4. Manejo de Errores en el Controlador

Para que las validaciones se activen, agrega la anotación `@Valid` en el controlador, en los métodos donde se recibe un `@RequestBody`.

- **`@Valid`:** Activa las validaciones definidas en la entidad.
- **`BindingResult`:** Captura los errores de validación, que luego puedes procesar para generar una respuesta clara.

```java
@PostMapping
public ResponseEntity<?> create(@Valid @RequestBody User user, BindingResult result) {
    if (result.hasErrors()) {
        List<String> errors = result.getFieldErrors()
                                    .stream()
                                    .map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
                                    .collect(Collectors.toList());
        return ResponseEntity.badRequest().body(errors);
    }

    return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user));
}
```

### 5. Ejemplo de Respuesta de Error en JSON

Si intentas crear un usuario con un correo inválido o un nombre de usuario vacío, obtendrás una respuesta similar a esta:

```java
[
    "El campo 'username' El nombre de usuario no puede estar vacío ni contener solo espacios en blanco.",
    "El campo 'email' debe ser una dirección de correo electrónico válida."
]

```

### 6. Beneficios de Usar Validaciones

- **Prevención de datos inválidos:** Evita errores a nivel de base de datos y mejora la calidad de los datos almacenados.
- **Respuestas claras:** Proporciona retroalimentación inmediata al usuario sobre problemas con los datos enviados.
- **Centralización de reglas:** Las reglas de validación están definidas directamente en la entidad, asegurando consistencia en toda la aplicación.

## El controlador



## Capa de request



json

CopiarEditar

java

CopiarEditar





java

CopiarEditar



Puedes ir al archivo pom.xml, haz clic derercho, selecciona Add Starters, se abrirla el cuadro de dialogo para añadir dependencias.

Añade la dependencia Validation

Otra forma es ir al buscador, seleccionar Show and Run comands, seleccion Spring initalizr: add starters..., realiza la misma acción para agregar dependencias.

Pulsa Enter y aparecera un cuadro de dialogo solicitando que si se quiere añadir las dependencias. Clic en Proceed



En el archivo pom.xml se tendra la dependencia

```xml
<!-- -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
<!-- -->
```

### NotEmpty

Primero ve a la clase enetity, los campos que se llenan username, password y email se puede añadir validaciones como @NotEmpty, inicialmente no lo encuentra, es una anotacion para validar los campos que no sean vacios, campos de tipo String.

NOta: se utiliza NotEmpty de jakarta.validation no de org.hibernate.validator porque esta deprecado.

Si se quiere validar algo que no es un stirng ocmo un numero o un objeto se utiliza @NotNull,

@NotBlank es parecido a NotEmpty, la difernecia es que empty este vacio, acepta espacios en blanco, notblank valida que un string no tenga un espacio en blanco.

Utiliza @NotBlack en la campo username, por defecto, los mensajes de idioma de error es automatico segun el lenguaje, zona horaria, se puede personalizar el mensaje de error, el atributo message de la anotación se puede colocar una mensaje.

Se tiene la anotación @Size de jakarta.validation, el tamaño que puede tener, tienes sus atributos max y min para especificar la cantidad de caracteres,

Tambien se tiene las anotacionse @Max y @Min pero solamente es para números, BigDecimal, Long, Int, no soporta Double ni Float.

Se establece un maximo y un minimo

Tambien se tiene @Digits para validar que sea un digito

Más información en la documentación

```java
package com.andres.backend.usersapp.backend_usersapp.models.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    // Agrega la anotación Size con los atributos min y max
    @Size(min = 4, max = 8)
    @Column(unique = true)
    private String username;

    @NotEmpty
    private String password;

    @Email
    @NotEmpty
    @Column(unique = true)
    private String email;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
```



(CONTINUA AQUI)

---

## DTO

Puedes considerar el uso de DTOs (Data Transfer Objects) si necesitas personalizar la información que se devuelve al cliente. Los DTOs pueden omitir algunos atributos de la entidad o formatear la información según sea necesario. Por ejemplo, si solo necesitas devolver el nombre y el correo electrónico del usuario, puedes crear un `UserDTO` con esos campos.
