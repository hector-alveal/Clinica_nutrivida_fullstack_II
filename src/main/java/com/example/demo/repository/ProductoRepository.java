package main.java.com.example.demo.repository;

import main.java.com.example.demo.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository
    extends JpaRepository<Producto, Long> {
}