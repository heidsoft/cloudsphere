package com.heidsoft.controller;


import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 * 基于spring cloud 构建一个restful api
 * </p>
 * @author heidsoft
 * @date 2018-01-19
 */
@RestController
public class HelloController {

    /**
     * 日志记录对象
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

    @Qualifier("discoveryClient")
    @Autowired
    private DiscoveryClient client;

    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public String index(){
        LOGGER.info("come in  index ....");

        //获取服务实例列表
        List<String> instances = client.getServices();
        boolean isNullOrEmpty = org.springframework.util.ObjectUtils.isEmpty(instances);
        if(!isNullOrEmpty){
            for( String instance : instances){
                LOGGER.info("service is --> {}",instance);
            }
        }

        return "Hello World";
    }

    @RequestMapping(value = "/hello2",method = RequestMethod.GET)
    public String index2(){
        return "<html><body>aaaaaabbb</body></html>";
    }
}
