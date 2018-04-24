package com.heidsoft;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.client.SpringCloudApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

/**
 * 通过 EnableZuulProxy 开启网关
 * 应用网关
 * @author heidsoft
 */
@EnableZuulProxy
@SpringCloudApplication
public class GatewayApplication {
  public static void main(String[] args) {

    new SpringApplicationBuilder(GatewayApplication.class).web(true).run(args);

  }
}