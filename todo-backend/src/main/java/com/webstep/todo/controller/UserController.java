package com.webstep.todo.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(path = "${v1API}/users")
public class UserController {

    @GetMapping("/me")
    public Principal user(Principal principal) {
        return principal;
    }


}