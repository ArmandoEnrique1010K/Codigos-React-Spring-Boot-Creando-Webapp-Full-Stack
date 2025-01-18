package com.andres.backend.cartapp.backendcartapp.repositories;

import org.springframework.data.repository.CrudRepository;
import com.andres.backend.cartapp.backendcartapp.models.entities.Product;

// Extiende CrudRepository especificando la entidad y el tipo del ID
// No requiere la anotación @Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

}
