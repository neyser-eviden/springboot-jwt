package com.neyser.library.controllers;

import com.neyser.library.entities.Author;
import com.neyser.library.services.AuthorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = "*")
@RestController
@RequestMapping("/api/authors")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping
    public List<Author> list(){
        return authorService.findAll();
    }

    //@PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody Author author, BindingResult result){
        /*if(result.hasFieldErrors()){
            return validation(result);
        }*/
        return ResponseEntity.status(HttpStatus.CREATED).body(authorService.save(author));
    }

}
