package com.kang.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by feshfans on 2016/11/8.
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @RequestMapping("/{id}")
    public String view(@PathVariable("id") int id){
        return "hello world";
    }

}
