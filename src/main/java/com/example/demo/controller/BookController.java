package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.service.BookService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/books")
@Api(value = "Book Management System")
public class BookController {
@Autowired
private BookService bookService;
@GetMapping
@ApiOperation(value = "View a list of available books", response = List.class)
public List<Book> getAllBooks() {
return bookService.getAllBooks();
}
@GetMapping("/{id}")
@ApiOperation(value = "Get a book by Id")
public Book getBookById(@PathVariable Long id) {
return bookService.getBookById(id);
}
@PostMapping
@ApiOperation(value = "Add a new book")
public Book createBook(@RequestBody Book book) {
return bookService.saveBook(book);
}
@PutMapping("/{id}")
@ApiOperation(value = "Update an existing book")
public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
Book existingBook = bookService.getBookById(id);
if (existingBook != null) {
existingBook.setTitle(book.getTitle());
existingBook.setAuthor(book.getAuthor());
return bookService.saveBook(existingBook);
}
return null;
}
@DeleteMapping("/{id}")
@ApiOperation(value = "Delete a book")
public void deleteBook(@PathVariable Long id) {
bookService.deleteBook(id);
}
}