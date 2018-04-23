package com.heidsoft;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * <p>服务注册服务中心</p>
 *
 * @author heidsoft
 */
@SpringBootApplication
@EnableEurekaServer
public class EurekaServer {
	public static void main(String[] args) {
		new SpringApplicationBuilder().run(args);
	}
}
