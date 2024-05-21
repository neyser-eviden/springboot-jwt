package com.neyser.library.services;



import com.neyser.library.entities.Author;

import java.util.List;

public interface AuthorService {
    List<Author> findAll();

    Author save(Author author);
}
