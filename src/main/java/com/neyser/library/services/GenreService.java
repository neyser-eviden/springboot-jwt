package com.neyser.library.services;

import com.neyser.library.entities.Genre;

import java.util.List;

public interface GenreService {
    List<Genre> findAll();

    Genre save(Genre genre);
}
