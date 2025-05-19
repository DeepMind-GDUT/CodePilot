package com.deepmind.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController("/Community")
public class CommunityController {
    @GetMapping("/init")
    public List<String> CommunityInit(){
        return new ArrayList<>();
    }

    @GetMapping("/getPage")
    public List<String> getPage(){
        return new ArrayList<>();
    }
}
