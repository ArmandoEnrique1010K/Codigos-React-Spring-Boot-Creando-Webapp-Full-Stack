package com.andres.backend.usersapp.backendusersapp.auth.filters;

import java.io.IOException;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.andres.backend.usersapp.backendusersapp.models.entities.User;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import static com.andres.backend.usersapp.backendusersapp.auth.TokenJwtConfig.*;

// Esta clase extiende el filtro predeterminado de Spring para la autenticación: UsernamePasswordAuthenticationFilter
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    // Este atributo es necesario para la autenticación
    private AuthenticationManager authenticationManager;

    // Constructor de la clase
    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    // Implementa los siguientes 3 metodos de la clase
    // UsernamePasswordAuthenticationFilter

    // Metodo para intentar la autenticación, con el request y response
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {

        User user = null;
        String username = null;
        String password = null;

        try {
            // Convertir el cuerpo del request JSON a la entidad User
            user = new ObjectMapper().readValue(request.getInputStream(), User.class);
            username = user.getUsername();
            password = user.getPassword();

            // Logging de debug
            // logger.info("Username desde request InputStream (raw) " + username);
            // logger.info("Password desde request InputStream (raw) " + password);

            // Contatena varios catch para manejar las excepciones (posibles errores)
        } catch (StreamReadException e) {
            e.printStackTrace();
        } catch (DatabindException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        // Crear el token de autenticación
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, password);

        // Enviar el token al AuthenticationManager para que valide las credenciales
        return authenticationManager.authenticate(authToken);
    }

    // Método para la respuesta exitosa de la autenticación, el metodo es de tipo
    // protected, por lo que solo puede ser accedido por la clase y sus subclases
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
            Authentication authResult) throws IOException, ServletException {

        // Obtener el nombre de usuario del resultado de la autenticación
        String username = ((org.springframework.security.core.userdetails.User) authResult.getPrincipal())
                .getUsername();

        // Obtener los roles del resultado de la autenticación
        Collection<? extends GrantedAuthority> roles = authResult.getAuthorities();

        // Verificar si el usuario es administrador
        boolean isAdmin = roles.stream().anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));

        // Crear un objeto Claims para almacenar los roles y el nombre de usuario
        Claims claims = Jwts.claims();
        claims.put("authorities", new ObjectMapper().writeValueAsString(roles));
        claims.put("isAdmin", isAdmin);
        claims.put("username", username);

        // Generar un JWT real
        String token = Jwts.builder()
                .setClaims(claims) // Agregar los claims al JWT
                .setSubject(username) // Agregar el nombre de usuario al JWT
                .signWith(SECRET_KEY) // Firmar el JWT con la clave secreta
                .setIssuedAt(new Date()) // Agregar la fecha de emisión al JWT
                .setExpiration(new Date(System.currentTimeMillis() + 3600000)) // Agregar la fecha de expiración al JWT
                                                                               // (3600000 milisegundos <> 1 hora)
                .compact(); // Compactar el JWT en una cadena

        // Establecer el JWT en la cabecera de la respuesta
        response.addHeader(HEADER_AUTHORIZATION, PREFIX_TOKEN + token);

        // Crear un objeto JSON para la respuesta
        Map<String, Object> body = new HashMap<>();
        body.put("token", token);
        body.put("message", String.format("Hola %s, has iniciado sesion con exito!", username));
        body.put("username", username);

        // Escribir el JSON en la respuesta
        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(200);
        response.setContentType("application/json");
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException failed) throws IOException, ServletException {

        // Crea un mapa para la respuesta
        Map<String, Object> body = new HashMap<>();

        // Agrega un mensaje de error
        body.put("message", "Error en la autenticacion username o password incorrecto!");
        // Muestra el error en la respuesta (aunque no es recomendado mostrar ese error
        // porque podria ser un problema de seguridad)
        body.put("error", failed.getMessage());

        // Escribir el cuerpo de la respuesta como JSON
        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        // Establecer el código de estado como 401 (No autorizado)
        response.setStatus(401);
        // Establecer el tipo de contenido de la respuesta como JSON
        response.setContentType("application/json");
    }

}
