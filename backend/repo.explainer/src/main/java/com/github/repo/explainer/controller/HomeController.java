package com.github.repo.explainer.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/")
@CrossOrigin("http://localhost:5173")
public class HomeController {

    @GetMapping("/health/check")
    public String healthCheck(){
        return "Backend is Running Successfully and healthy.";
    }

}
