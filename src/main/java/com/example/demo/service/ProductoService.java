package com.example.demo.service;

import com.example.demo.model.Producto;
import com.example.demo.repository.ProductoRepository;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
@Service
public class ProductoService {
private final ProductoRepository repository;
public ProductoService(ProductoRepository repository) {
this.repository = repository;
}
// Listar todos los productos
public List<Producto> listar() {
return repository.findAll();
}
// Buscar un producto por ID
public Producto buscarPorId(Long id) {
return repository.findById(id)
.orElseThrow(() ->
new ResponseStatusException(
HttpStatus.NOT_FOUND,
"Producto no encontrado"
)
);
}
// Guardar un producto
public Producto guardar(Producto producto) {
producto.setId(null);
return repository.save(producto);
}
// Actualizar un producto
public Producto actualizar(Long id, Producto datos) {
Producto producto = buscarPorId(id);
producto.setNombre(datos.getNombre());
producto.setPrecio(datos.getPrecio());
return repository.save(producto);
}
// Eliminar un producto
public void eliminar(Long id) {
Producto producto = buscarPorId(id);
repository.delete(producto);
}
}
