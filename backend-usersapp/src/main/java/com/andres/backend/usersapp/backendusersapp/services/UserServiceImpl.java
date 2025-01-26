package com.andres.backend.usersapp.backendusersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.andres.backend.usersapp.backendusersapp.models.IUser;
import com.andres.backend.usersapp.backendusersapp.models.dto.UserDto;
import com.andres.backend.usersapp.backendusersapp.models.dto.mapper.DtoMapperUser;
import com.andres.backend.usersapp.backendusersapp.models.entities.Role;
import com.andres.backend.usersapp.backendusersapp.models.entities.User;
import com.andres.backend.usersapp.backendusersapp.models.request.UserRequest;
import com.andres.backend.usersapp.backendusersapp.repositories.RoleRepository;
import com.andres.backend.usersapp.backendusersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Metodo para obtener una lista de usuarios (tipo lectura)
    @Override
    @Transactional(readOnly = true)
    public List<UserDto> findAll() {
        // Realiza un cast para convertir un iterable a list
        List<User> users = (List<User>) repository.findAll();
        return users
                .stream()
                .map(u -> DtoMapperUser.builder().setUser(u).build())
                .collect(Collectors.toList());
    }

    // Este metodo tambien es de tipo lectura (obtiene un usuario por su id)
    @Override
    @Transactional(readOnly = true)
    public Optional<UserDto> findById(Long id) {
        return repository.findById(id).map(u -> DtoMapperUser
                .builder()
                .setUser(u)
                .build());

    }

    // El metodo no es de tipo lectura, crea un nuevo usuario
    @Override
    @Transactional
    public UserDto save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(getRoles(user));
        return DtoMapperUser.builder().setUser(repository.save(user)).build();
    }

    // Actualiza el usuario por su id, requiere los datos que se van a sobreescribir

    // Observa que se utiliza UserRequest en lugar de User, pues en el controlador
    // llama a esta función requiriendo un objeto de tipo UserRequest
    @Override
    @Transactional
    public Optional<UserDto> update(UserRequest user, Long id) {
        // Primero tiene que buscar al usuario por su ID en la base de datos
        Optional<User> o = repository.findById(id);

        // Variable para el almacenar el usuario que se guardara
        User userOptional = null;

        if (o.isPresent()) {
            // Establece el usuario en userDb
            User userDb = o.orElseThrow();

            // Actualiza los campos segun los campos del objeto user recibido
            userDb.setRoles(getRoles(user));
            userDb.setUsername(user.getUsername());
            userDb.setEmail(user.getEmail());

            // Observa que se omite el campo password

            // Guarda los cambios en la base de datos
            userOptional = repository.save(userDb);
        }

        // En lugar del metodo empty, se utiliza ofNullable, en el caso de que pase el
        // usuario lo devuelve, de lo contrario devuelve un null
        return Optional.ofNullable(DtoMapperUser.builder().setUser(userOptional).build());
    }

    // Metodo para borrar al usuario de la base de datos
    @Override
    @Transactional
    public void remove(Long id) {
        // El metodo deleteById elimina el usuario por su id
        repository.deleteById(id);
    }

    private List<Role> getRoles(IUser user) {
        Optional<Role> ou = roleRepository.findByName("ROLE_USER");

        List<Role> roles = new ArrayList<>();
        if (ou.isPresent()) {
            roles.add(ou.orElseThrow());
        }

        if (user.isAdmin()) {
            Optional<Role> oa = roleRepository.findByName("ROLE_ADMIN");
            if (oa.isPresent()) {
                roles.add(oa.orElseThrow());
            }
        }
        return roles;
    }

}
