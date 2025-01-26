package com.andres.backend.usersapp.backendusersapp.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.andres.backend.usersapp.backendusersapp.repositories.UserRepository;

@Service
// Implementa la interfaz UserDetailsService
public class JpaUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    @Transactional(readOnly = true)
    // Metodo para cargar el usuario por su nombre de usuario (metodo por defecto de
    // UserDetailsService)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<com.andres.backend.usersapp.backendusersapp.models.entities.User> o = repository
                .getUserByUsername(username);

        if (!o.isPresent()) {
            // Lanza el error si el usuario no existe
            throw new UsernameNotFoundException(String.format("Username %s no existe en el sistema!", username));
        }
        com.andres.backend.usersapp.backendusersapp.models.entities.User user = o.orElseThrow();

        List<GrantedAuthority> authorities = user.getRoles()
                .stream()
                .map(r -> new SimpleGrantedAuthority(r.getName()))
                .collect(Collectors.toList());

        // Devuelve un nuevo objeto User con las credenciales del usuario ficticio
        // El primer true indica si el usuario está habilitado, el segundo true es si la
        // cuenta no expira,
        // el tercer true es si las credenciales no expiran y el cuarto true es si no
        // está bloqueado.
        return new User(
                user.getUsername(),
                user.getPassword(),
                true,
                true,
                true,
                true,
                authorities);

    }

}
