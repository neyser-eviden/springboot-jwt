package com.neyser.library.services;



import com.neyser.library.entities.Genre;
import com.neyser.library.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GenreServiceImpl implements GenreService {

    @Autowired
    private GenreRepository genreRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Genre> findAll() {

        List<Genre> genres = (List<Genre>) genreRepository.findAll();

        System.out.println("Generos:");
        genres.forEach(g -> System.out.println(g));

        return (List<Genre>) genreRepository.findAll();
    }

    @Override
    public Genre save(Genre genre) {
        return genreRepository.save(genre);
    }
}
