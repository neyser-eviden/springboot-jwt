package com.neyser.library.controllers;

import com.neyser.library.entities.Book;
import com.neyser.library.services.BookService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(originPatterns = "*")
@RestController
@RequestMapping("/api/books")
//@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:4200"})
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    @PreAuthorize("hasRole('USER')")
    public List<Book> list(){
        return bookService.findAll();
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody Book book, BindingResult result){
        /*if(result.hasFieldErrors()){
            return validation(result);
        }*/
        return ResponseEntity.status(HttpStatus.CREATED).body(bookService.save(book));
    }

    @PreAuthorize("hasRole('USER')")
    @PutMapping
    public ResponseEntity<?> update(@Valid @RequestBody Book book, BindingResult result){
        /*if(result.hasFieldErrors()){
            return validation(result);
        }*/
        return ResponseEntity.status(HttpStatus.OK).body(bookService.save(book));
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("{id}")
    public ResponseEntity<?> eliminarSocio(@PathVariable("id") Long idBook){
        Book book = new Book();
        book.setId(idBook);
        bookService.delete(book);
        return ResponseEntity.status(HttpStatus.OK).body(book);
    }

}
