package com.heidsoft.controller;


import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


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


    @RequestMapping(value = "/hello2",method = RequestMethod.GET)
    public String index2(){

        LOGGER.info("hello");
        return "test";
    }
}
