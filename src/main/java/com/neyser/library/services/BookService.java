package com.neyser.library.services;



import com.neyser.library.entities.Book;

import java.util.List;

public interface BookService {
    List<Book> findAll();

    Book save(Book book);

    void delete(Book book);
}
