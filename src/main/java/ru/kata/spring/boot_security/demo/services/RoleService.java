package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.models.Role;

import java.util.List;
import java.util.Set;

public interface RoleService {
    Set<Role> listRoles();

    void add(Role role);

    Role getRoleByID(long id);
    Role findByName(String name);

}
