package com.kang.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {

    @RequestMapping("/login")
    @CrossOrigin
    public String login(String username, String password){
        if (username.equals("kanghl")&&password.equals("123456")){
            return "ok";
        }
        return "failed";
    }
}
