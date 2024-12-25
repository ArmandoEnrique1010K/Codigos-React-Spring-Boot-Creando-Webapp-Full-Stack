package com.andres.backend.cartapp.backendcartapp.services;

import java.util.List;
import com.andres.backend.cartapp.backendcartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();
}
