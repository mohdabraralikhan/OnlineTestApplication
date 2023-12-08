package com.onlinetestapplicationsystem.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.onlinetestapplicationsystem.application.services.QnAService;

@RestController
@CrossOrigin("http://localhost:8080")
@RequestMapping("/api")

public class ApplicationController {

    @Autowired
    QnAService questionsService;
    
    @GetMapping(value="/")
    public String home() {
        return "home";
    }

    @GetMapping(value="/questions/{pageNumber}")
    public List<Object[]> getQuestions(@PathVariable("pageNumber") int pageNumber) {
        
        Page<Object[]> page = questionsService.getQuestions(pageNumber);
        return page.getContent();
    }

     
    @GetMapping(value = "/answers/{ids}")
    public List<Object[]> getAnswers(@PathVariable List<Long> ids) {
        return questionsService.getAnswers(ids);
    }


}
