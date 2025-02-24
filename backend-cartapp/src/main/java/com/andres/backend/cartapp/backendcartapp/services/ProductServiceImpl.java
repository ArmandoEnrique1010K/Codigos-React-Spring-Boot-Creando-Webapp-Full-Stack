package com.andres.backend.cartapp.backendcartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.andres.backend.cartapp.backendcartapp.repositories.ProductRepository;
import com.andres.backend.cartapp.backendcartapp.models.entities.Product;

// Anota esta clase con @Service
// Implementa la interfaz requerida
@Service
public class ProductServiceImpl implements ProductService {

    // Inyecta el repositorio
    @Autowired
    private ProductRepository repository;

    @Override
    // Optimiza el rendimiento, marca como tipo lectura
    @Transactional(readOnly = true)
    public List<Product> findAll() {
        // Utiliza el método findAll del repositorio para obtener todos los productos
        // Realiza un cast, convierte el resultado de Iterable a List
        return (List<Product>) repository.findAll();
    }
}
