package com.neyser.library.services;

import com.neyser.library.entities.User;

import java.util.List;

public interface UserService {

    List<User> findAll();

    User save(User user);

    boolean existsByUsername(String username);


}
