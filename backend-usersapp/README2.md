## Implementación de login con JPA

### 1. Implementación de `JpaUserDetailsService` para Login

- **Objetivo**: Implementar la funcionalidad de login utilizando JPA y comparar la contraseña del usuario encriptada.

- **Pasos a seguir**:
  
  1. **Método `loadUserByUsername`**:
     
     - Este método se encarga de cargar el usuario por su `username` desde la base de datos.
     - Se debe verificar que el `username` exista en la base de datos.
     - Se realiza la comparación de la contraseña encriptada mediante **Spring Security**. La contraseña enviada se encripta y se compara con la que está almacenada en la base de datos.
     - Si el usuario no se encuentra, se lanza la excepción `UsernameNotFoundException`.
  
  2. **Uso de `UserRepository`**:
     
     - Se crea un repositorio en `UserRepository` con el método `findByUsername`, que devuelve un `Optional<User>` para evitar errores si no se encuentra el usuario.
     - Alternativamente, se puede utilizar una consulta personalizada con `@Query` para buscar al usuario en la base de datos.
     
     ```java
     Optional<User> findByUsername(String username);
     ```
     
     O bien:
     
     ```java
     @Query("SELECT u FROM User u WHERE u.username = ?1")
     Optional<User> getUserByUsername(String username);
     ```
  
  3. **Inyección del Repositorio**:
     
     - Se inyecta `UserRepository` en `JpaUserDetailsService` con `@Autowired`.
  
  4. **Implementación de `loadUserByUsername`**:
     
     - Se busca el usuario por `username` con el método `findByUsername`.
     - Si el usuario no está presente, se lanza `UsernameNotFoundException`.
     - Se obtiene el usuario y se crean los **`GrantedAuthority`** para asignar roles, en este caso, `ROLE_USER`.
     
     ```java
     return new User(user.getUsername(), user.getPassword(), authorities);
     ```
  
  5. **Password Matching**:
     
     - **Spring Security** se encarga de comparar la contraseña encriptada que llega del formulario con la que está almacenada en la base de datos. Si ambas coinciden, se permite el acceso.
  
  6. **Marcado como `@Transactional(readOnly = true)`**:
     
     - La transacción se marca como de solo lectura para evitar cambios no deseados en la base de datos cuando solo se consulta el usuario.

### 2. Código Final de `JpaUserDetailsService`

```java
@Service
public class JpaUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Realiza una busqueda en repository para encontrar al usuario por su nombre
        // Y no un unico usuario como "admin"
        Optional<com.andres.backend.usersapp.backendusersapp.models.entities.User> o = repository.findByUsername(username);

        if (!o.isPresent()) {
            throw new UsernameNotFoundException(String.format("Username %s no existe en el sistema", username));
        }

        // Se utiliza una importación directa para evitar que User coincida con el User de org.springframework.security.core.userdetails.User
        com.andres.backend.usersapp.backendusersapp.models.entities.User user = o.orElseThrow();

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        // Se establece el nombre de usuario y la constraseña en el objeto User
        return new User(user.getUsername(), user.getPassword(), true, true, true, true, authorities);
    }
}
```

### 3. Pruebas con Postman

- Se realiza una petición `POST` a `localhost:8080/login` con el nombre de usuario y la contraseña en el cuerpo de la solicitud.  

- Si las credenciales son correctas, se devuelve un token JWT en el encabezado de la respuesta.

- Luego puedes realizar una petición de tipo POST a `localhost:8080/users` (no olvidar pasarle el token generado al iniciar sesion) para registrar un nuevo usuario y puedes iniciar sesion con ese nuevo usuario (en una API REST no puedes cerrar la sesión actual).

<img src="assets/2025-01-26-19-35-41-image.png" title="" alt="" data-align="center">


