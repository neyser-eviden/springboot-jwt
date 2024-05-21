package com.neyser.library.controllers;

import com.neyser.library.entities.Genre;
import com.neyser.library.services.GenreService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = "*")
@RestController
@RequestMapping("/api/genders")
public class GenreController {

    @Autowired
    private GenreService genreService;

    @GetMapping
    public List<Genre> list(){
        return genreService.findAll();
    }

    //@PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody Genre genre, BindingResult result){
        /*if(result.hasFieldErrors()){
            return validation(result);
        }*/
        return ResponseEntity.status(HttpStatus.CREATED).body(genreService.save(genre));
    }

}
