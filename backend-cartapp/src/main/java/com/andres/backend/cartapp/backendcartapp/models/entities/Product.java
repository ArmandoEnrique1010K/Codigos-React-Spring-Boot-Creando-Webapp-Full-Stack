package com.andres.backend.cartapp.backendcartapp.models.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// Establece que esta clase va a ser de tipo entidad
@Entity
// Especifica el nombre de la tabla
@Table(name = "products")
public class Product {

    // Define este atributo como una llave primaria
    @Id
    // Define la forma en que se va a generar el id, IDENTITY sirve para
    // autoincrementar el ultimo valor
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Atributos para un producto
    // Puedes utilizar @Column(name = "name") para especificar el nombre de la
    // columna que tendra la tabla
    private String name;

    private String description;

    private Long price;

    // Genera dinamicamente los getters y setters, clic derecho, selecciona "Source
    // action" > "Generate getters and setters", marca todos los campos de la
    // entidad y pulsa OK
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

}
