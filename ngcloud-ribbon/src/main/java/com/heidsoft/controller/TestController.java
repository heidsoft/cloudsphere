package com.heidsoft.controller;

import com.heidsoft.service.CloudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {
    @Autowired
    public CloudService cloudService;

    @RequestMapping(value = "/hi")
    public String hi(@RequestParam String name){
        System.out.println("hi......");
        cloudService.test();
        return "test";
    }
}
