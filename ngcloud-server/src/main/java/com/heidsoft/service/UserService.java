package com.heidsoft.service;

import com.heidsoft.model.User;

/**
 * Created by heidsoft on 2017/3/21.
 */
public interface UserService {
    void save(User user);

    User findByUsername(String username);
}