package com.heidsoft.cloud.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class SimpleController {
    /**
     * 日志记录对象
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(SimpleController.class);

    /**
     * 一个sample rest api
     * @return
     */
    @RequestMapping(value = "/sample",method = RequestMethod.GET)
    public String simple(){
        LOGGER.info("come in  simple ....");
        Map<String,Object> sample = new HashMap<>(16);
        sample.put("sample","rest demo");
        JSONObject json = new JSONObject(sample);
        LOGGER.info("come out  simple ....");
        return json.toJSONString();
    }

}
