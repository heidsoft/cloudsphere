package com.heidsoft;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 默认将服务注册到，服务中心
 * @author heidsoft
 */
@SpringBootApplication
//@EnableEurekaClient
public class NgClientApplication {
    public static void main(String[] args) {
        new SpringApplicationBuilder(NgClientApplication.class).web(true).run(args);
    }
}

