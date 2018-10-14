package com.heidsoft.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@Configuration
// 创建实现Filter的类，名为"springSessionRepositoryFilter"的Bean
@EnableRedisHttpSession
public class HttpSessionConfig {

}
