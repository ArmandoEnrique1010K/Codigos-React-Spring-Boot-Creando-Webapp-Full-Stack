package com.andres.backend.usersapp.backendusersapp.auth;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.andres.backend.usersapp.backendusersapp.auth.filters.JwtAuthenticationFilter;
import com.andres.backend.usersapp.backendusersapp.auth.filters.JwtValidationFilter;

// Anotación para la configuración de la seguridad
// Se importa de org.springframework.context...
@Configuration
public class SpringSecurityConfig {

    // Inyección de dependencia de la configuración de autenticación
    @Autowired
    private AuthenticationConfiguration authenticationConfiguration;

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager authenticationManager() throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    // Bean almacena el metodo como un componente de Spring (similar a @Service)
    @Bean
    // Metodo para configurar las reglas de autenticación y autorización
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                // Configuración de reglas de autorización
                .authorizeHttpRequests(authorize -> authorize
                        // Permitir acceso público solo para solicitudes GET a "/users"
                        .requestMatchers(HttpMethod.GET, "/users").permitAll()

                        .requestMatchers(HttpMethod.GET, "/users/{id}").hasAnyRole("USER", "ADMIN")

                        .requestMatchers(HttpMethod.POST, "/users").hasRole("ADMIN")

                        .requestMatchers("/users/**").hasRole("ADMIN")

                        // .requestMatchers(HttpMethod.DELETE, "/users/{id}").hasRole("ADMIN")
                        // .requestMatchers(HttpMethod.PUT, "/users/{id}").hasRole("ADMIN")

                        // Requerir autenticación para cualquier otra solicitud
                        .anyRequest().authenticated())

                // Añade el filtro JWT con el AuthenticationManager
                .addFilter(new JwtAuthenticationFilter(authenticationConfiguration.getAuthenticationManager()))

                // Añade el filtro para la validación del token JWT
                .addFilter(new JwtValidationFilter(authenticationConfiguration.getAuthenticationManager()))

                // Deshabilitar CSRF, ya que no se utiliza en APIs RESTful
                .csrf(csrf -> csrf.disable())

                // Configuración para manejar sesiones sin estado (stateless)
                .sessionManagement(managment -> managment.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                .cors(cors -> cors.configurationSource(corsConfigurationSource()))

                // Construir y devolver la configuración de seguridad
                .build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    @Bean
    FilterRegistrationBean<CorsFilter> corsFilter() {
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(
                new CorsFilter(corsConfigurationSource()));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }

}
