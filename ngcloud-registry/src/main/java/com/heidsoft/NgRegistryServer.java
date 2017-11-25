package com.heidsoft;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * <p>服务注册服务中心</p>
 *
 * @author heidsoft
 */
@SpringBootApplication
@EnableEurekaServer
public class NgRegistryServer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(NgRegistryServer.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(NgRegistryServer.class, args);
	}
}
