package com.andres.backend.usersapp.backendusersapp.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.andres.backend.usersapp.backendusersapp.models.dto.UserDto;
import com.andres.backend.usersapp.backendusersapp.models.entities.User;
import com.andres.backend.usersapp.backendusersapp.models.request.UserRequest;
import com.andres.backend.usersapp.backendusersapp.services.UserService;

import jakarta.validation.Valid;

@RestController
// Establece que todas las rutas empiecen con "/users"
@RequestMapping("/users")

// No olvidar la configuración de CORS, en este caso cualquier cliente puede
// acceder a la API
@CrossOrigin(originPatterns = "*")
public class UserController {

    @Autowired
    private UserService service;

    // Si no tiene una ruta, se considera ("/")
    @GetMapping
    public List<UserDto> list() {
        return service.findAll();
    }

    // Endpoint para obtener un usuario por su id, se utiliza una ruta dinamica con
    // "/{id}"
    @GetMapping("/{id}")
    // @PathVarible sirve para definir una ruta dinamica que depende del id.
    // Puede llevar el atributo name para especificar el nombre del parametro que
    // viene en la ruta @PathVariable(name = "id"), pero se puede simplificar

    // El comodin <?> sirve para especificar el tipo de dato que devuelve, "?"
    // indica que puede ser cualquier tipo de dato
    public ResponseEntity<?> show(@PathVariable Long id) {
        // Conviene usar un Optional, porque existe el caso en que no podria contener el
        // usuario por su id
        Optional<UserDto> userOptionl = service.findById(id);

        if (userOptionl.isPresent()) {

            // Devuelve un ResponseEntity para proporcionar una respuesta completa, devuelve
            // un estado HTTP 200 si el usuario existe

            // En lugar de utilizar el metodo get, se utiliza orElseThrow para manejar el
            // caso de que no se encuentre el usuario

            return ResponseEntity.ok(userOptionl.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    // Crea un usuario
    // La ruta tambien se establece en ("/"), pero no ocurre un error porque esta
    // petición es de tipo POST

    // @RequestBody sirve para definir el objeto JSON que se enviara junto con la
    // petición
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody User user, BindingResult result) {
        if (result.hasErrors()) {
            return validation(result);
        }

        // Devuelve un estado 201 (create) y en el cuerpo (body) el usuario creado.

        // Permite al cliente recibir el objeto completo que se ha guardado en la base
        // de datos
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user));
    }

    // Actualiza un usuario, petición de tipo PUT
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody UserRequest user, BindingResult result, @PathVariable Long id) {
        if (result.hasErrors()) {
            return validation(result);
        }

        // Actualiza el usuario en la base de datos, requiere los datos como un objeto
        // JSON y el ID
        Optional<UserDto> o = service.update(user, id);

        // Verifica si se actualizo el usuario
        if (o.isPresent()) {
            // Devuelve una respuesta que incluye los datos del usuario actualizado

            // Recuerda que se encadena orElseThrow para lanzar una excepción si el usuario
            // no existe
            return ResponseEntity.status(HttpStatus.CREATED).body(o.orElseThrow());
        }

        // Si no se actualizo el usuario, devuelve un error 404 (notFound)
        return ResponseEntity.notFound().build();
    }

    // Elimina un usuario de forma definitiva, petición de tipo DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable Long id) {
        // Busca el usuario por su ID
        Optional<UserDto> o = service.findById(id);

        // Si el usuario existe
        if (o.isPresent()) {
            // Llama al servicio para eliminarlo por su id
            service.remove(id);
            // noContent es un metodo que devuelve el status 204, no hay contenido
            return ResponseEntity.noContent().build(); // 204
        }
        return ResponseEntity.notFound().build(); // 404
    }

    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> errors = new HashMap<>();

        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), "El campo " + err.getField() + " " + err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }
}
