配置文件restful方式访问

http://localhost:8888/address/dev
http://localhost:8888/address-dev.properties
http://localhost:8888/address-dev.yml

http请求地址和资源文件映射如下:
/{application}/{profile}[/{label}]
/{application}-{profile}.yml
/{label}/{application}-{profile}.yml
/{application}-{profile}.properties
/{label}/{application}-{profile}.properties
