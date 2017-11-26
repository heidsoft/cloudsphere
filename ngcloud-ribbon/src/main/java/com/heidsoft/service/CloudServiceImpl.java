package com.heidsoft.service;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Component
public class CloudServiceImpl implements CloudService{
    @Autowired
    public RestTemplate restTemplate;

    @HystrixCommand(fallbackMethod = "helloFallback")
    @Override
    public String helloService() {
       return restTemplate.getForEntity("http://NGCLOUD-SERVICE/service-instances/ngcloud-service",String.class).getBody();
    }

    public String helleFallback(){
        return "error";
    }

}
