package com.heidsoft.cloud.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
//import com.heidsoft.cloud.book.model.Book;
//import com.heidsoft.cloud.book.service.BookService;
//import org.elasticsearch.client.Client;
//import org.elasticsearch.common.settings.Setting;
//import org.elasticsearch.common.settings.Settings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class SimpleController {

//    @Autowired
//    private ElasticsearchOperations es;

//    @Autowired
//    private BookService bookService;
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
        System.out.println("start: "+System.currentTimeMillis());
        try {
            Thread.sleep(10000);//睡眠10s
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("end: "+System.currentTimeMillis());

//        printElasticSearchInfo();
//
//        bookService.save(new Book("1001", "Elasticsearch Basics", "Rambabu Posa", "23-FEB-2017"));
//        bookService.save(new Book("1002", "Apache Lucene Basics", "Rambabu Posa", "13-MAR-2017"));
//        bookService.save(new Book("1003", "Apache Solr Basics", "Rambabu Posa", "21-MAR-2017"));
//
//        //fuzzey search
//        Page<Book> books = bookService.findByAuthor("Rambabu", new PageRequest(0, 10));
//
//        //List<Book> books = bookService.findByTitle("Elasticsearch Basics");
//
//        books.forEach(x -> System.out.println(x));
        return JSON.toJSONString(json);
    }

//    //useful for debug
//    private void printElasticSearchInfo() {
//
//        System.out.println("--ElasticSearch-->");
//        Client client = es.getClient();
//        Map<String, Settings> asMap = client.settings().getAsGroups();
//
//        asMap.forEach((k, v) -> {
//            System.out.println(k + " = " + v);
//        });
//        System.out.println("<--ElasticSearch--");
//    }

}
