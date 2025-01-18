package com.andres.backend.cartapp.backendcartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.andres.backend.cartapp.backendcartapp.services.ProductService;
import com.andres.backend.cartapp.backendcartapp.models.entities.Product;

// @RestController es una anotación que combina @Controller con @ResponseBody, permite que la API devuelva datos en formato JSON
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    // Inyecta la interfaz del servicio
    @Autowired
    private ProductService service;

    // Mapea el método a una petición de tipo GET en la ruta /products.
    @GetMapping("/products")
    public List<Product> list() {
        // Obtiene todos los productos.
        // La lista se convierte a JSON y se envía en la respuesta al cliente.
        return service.findAll();
    }
}
