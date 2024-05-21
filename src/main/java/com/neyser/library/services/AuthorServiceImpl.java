package com.neyser.library.services;

import com.neyser.library.entities.Author;
import com.neyser.library.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService{

    @Autowired
    private AuthorRepository authorRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Author> findAll() {
        return (List<Author>) authorRepository.findAll();
    }

    @Override
    public Author save(Author author) {
        return authorRepository.save(author);
    }
}
