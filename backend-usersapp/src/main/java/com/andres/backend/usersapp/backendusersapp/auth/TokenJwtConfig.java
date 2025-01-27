package com.andres.backend.usersapp.backendusersapp.auth;

import java.security.Key;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

// Clase para almacenar la configuración del token JWT, contiene variables estaticas (constantes)
public class TokenJwtConfig {

    // Clave secreta para firmar el token
    // public final static String SECRET_KEY =
    // "algun_token_con_alguna_frase_secreta";
    public final static Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // Prefijo del token
    public final static String PREFIX_TOKEN = "Bearer ";

    // Header de autorización
    public final static String HEADER_AUTHORIZATION = "Authorization";

}
