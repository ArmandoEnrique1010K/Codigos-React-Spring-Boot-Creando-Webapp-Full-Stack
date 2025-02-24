package com.andres.backend.usersapp.backendusersapp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.andres.backend.usersapp.backendusersapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {

        // Metodo para encontrar un usuario por su username
        Optional<User> findByUsername(String username);

        // Consulta personalizada con @Query (realiza el mismo procedimiento anterior)
        @Query("select u from User u where u.username=?1")
        Optional<User> getUserByUsername(String username);
}
