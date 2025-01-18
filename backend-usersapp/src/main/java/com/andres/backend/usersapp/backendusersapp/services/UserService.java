package com.andres.backend.usersapp.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import com.andres.backend.usersapp.backendusersapp.models.dto.UserDto;
import com.andres.backend.usersapp.backendusersapp.models.entities.User;
import com.andres.backend.usersapp.backendusersapp.models.request.UserRequest;

// Metodos abstractos relacionados al usuario
public interface UserService {

    // Lista todos los usuarios
    List<UserDto> findAll();

    // Busca un usuario por su id
    Optional<UserDto> findById(Long id);

    // Almacena un usuario
    UserDto save(User user);

    // Actualiza un usuario, requiere los datos y el id del usuario
    Optional<UserDto> update(UserRequest user, Long id);

    // Elimina un usuario por su id (void define un metodo que no retorna nada)
    void remove(Long id);
}
