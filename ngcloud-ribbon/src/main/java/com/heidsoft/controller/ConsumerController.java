package com.heidsoft.controller;

import com.heidsoft.service.CloudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ConsumerController {
    @Autowired
    public CloudService cloudService;

    @RequestMapping(value = "/ribbon-consumer",method = RequestMethod.GET)
    public String hi(@RequestParam String name){
        System.out.println("start ....");
        return cloudService.helloService();
    }
}
