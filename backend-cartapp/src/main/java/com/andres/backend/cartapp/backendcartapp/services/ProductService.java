package com.andres.backend.cartapp.backendcartapp.services;

import java.util.List;
import com.andres.backend.cartapp.backendcartapp.models.entities.Product;

// La interfaz contiene metodos abstractos
public interface ProductService {

    // Este metodo sirve para devolver todos los registros
    List<Product> findAll();
}
