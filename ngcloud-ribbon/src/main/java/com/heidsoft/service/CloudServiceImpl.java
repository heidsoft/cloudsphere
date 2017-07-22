package com.heidsoft.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Component
public class CloudServiceImpl implements CloudService{
    @Autowired
    public RestTemplate restTemplate;


    @Override
    public void test() {
        System.out.println("test....");
        Map map = restTemplate.getForObject("http://NGCLOUD-SERVICE/service-instances/ngcloud-service",Map.class);
        System.out.println(map);
    }

}
