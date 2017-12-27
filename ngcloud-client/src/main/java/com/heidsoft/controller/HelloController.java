package com.heidsoft.controller;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>构建一个Restful api</p>
 */
@RestController
public class HelloController {
    private final Logger logger = Logger.getLogger(getClass());

    @Qualifier("discoveryClient")
    @Autowired
    private DiscoveryClient client;

    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public String index(){
        ServiceInstance instance = client.getLocalServiceInstance();
        logger.info("/hello, host : "+ instance.getHost() + ", service_id:"+instance.getServiceId());

        return "Hello World";
    }

    @RequestMapping(value = "/hello2",method = RequestMethod.GET)
    public String index2(){
        ServiceInstance instance = client.getLocalServiceInstance();
        logger.info("/hello, host : "+ instance.getHost() + ", service_id:"+instance.getServiceId());

        return "<html><body>aaaaaabbb</body></html>";
    }
}
