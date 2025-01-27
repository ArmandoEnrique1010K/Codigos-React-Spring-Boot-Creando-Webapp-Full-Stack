package com.andres.backend.usersapp.backendusersapp.auth.filters;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.andres.backend.usersapp.backendusersapp.auth.SimpleGrantedAuthorityJsonCreator;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

// Importa las variables estaticas definidas en TokenJwtConfig
import static com.andres.backend.usersapp.backendusersapp.auth.TokenJwtConfig.*;

// Para utilizar las variables estaticas solamente llamalas por su nombre: HEADER_AUTHORIZATION, PREFIX_TOKEN y SECRET_KEY

public class JwtValidationFilter extends BasicAuthenticationFilter {

    public JwtValidationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    // Metodo para validar el token JWT
    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain)
            throws IOException, ServletException {

        // Obtiene el header de autorización
        String header = request.getHeader(HEADER_AUTHORIZATION);

        // Si el header es nulo o no comienza con el prefijo del token, continua con la
        // cadena
        if (header == null || !header.startsWith(PREFIX_TOKEN)) {
            chain.doFilter(request, response);

            return;
        }

        // Elimina el prefijo "Bearer " para obtener el token puro
        String token = header.replace(PREFIX_TOKEN, "");

        // Intenta validar el token
        try {

            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(SECRET_KEY)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            Object authoritiesClaims = claims.get("authorities");
            String username = claims.getSubject();
            Object username2 = claims.get("username");
            System.out.println(username);
            System.out.println(username2);

            Collection<? extends GrantedAuthority> authorities = Arrays
                    .asList(new ObjectMapper()
                            .addMixIn(SimpleGrantedAuthority.class, SimpleGrantedAuthorityJsonCreator.class)
                            .readValue(authoritiesClaims.toString().getBytes(), SimpleGrantedAuthority[].class));

            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, null,
                    authorities);

            SecurityContextHolder.getContext().setAuthentication(authentication);
            chain.doFilter(request, response);
        } catch (JwtException e) {
            // Si el token no es valido, envia un mensaje de error
            Map<String, String> body = new HashMap<>();

            // Recuerda que el mensaje de error se puede personalizar (en este caso se tiene
            // 2 campos: error y message)
            body.put("error", e.getMessage());
            body.put("message", "El token JWT no es valido!");

            // Escribir el JSON en la respuesta
            response.getWriter().write(new ObjectMapper().writeValueAsString(body));
            // Status 401 es cuando no se ha autenticado
            response.setStatus(401);
            response.setContentType("application/json");
        }
    }

}
