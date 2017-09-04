package com.heidsoft.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.heidsoft.service.CloudService;

import java.util.Map;

@SpringBootApplication
@EnableDiscoveryClient
@RestController
@EnableAutoConfiguration
public class ServiceRibbonApplication {

    @RequestMapping("/test")
    public String callHome(){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("http://127.0.0.1:8763/service-instances/ngcloud-service", String.class);
    }

    public static void main(String[] args) {

        SpringApplication.run(ServiceRibbonApplication.class, args);
    }

    @Bean
    @LoadBalanced
    RestTemplate restTemplate() {
        return new RestTemplate();
    }


}