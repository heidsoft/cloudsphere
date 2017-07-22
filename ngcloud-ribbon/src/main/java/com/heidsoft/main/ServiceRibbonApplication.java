import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import com.heidsoft.service.CloudService;

@SpringBootApplication
@EnableDiscoveryClient
public class ServiceRibbonApplication {

    @Autowired
    public CloudService cloudService;

    public static void main(String[] args) {
        SpringApplication.run(ServiceRibbonApplication.class, args);
    }

    @Bean
    @LoadBalanced
    RestTemplate restTemplate() {
        return new RestTemplate();
    }


    @RequestMapping(value = "/hi")
    public String hi(@RequestParam String name){
         System.out.println("hi......");
         cloudService.test();
         return "test";
    }


}