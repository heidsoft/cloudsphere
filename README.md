# NgCloud
开源CMP系统

# 系统设计
## 服务注册
![服务注册](/doc/image/spring-cloud-service-discovery.png)

## 登录界面
![Login](/doc/image/login.png)

## 资源服务目录
![NgCloud](/doc/image/ngcloud.png)



# 功能设计

- Dashboard(Docker info,Vcenter info, Zabbix info)

# 技术架构
```
1.加入spring cloud 
2.升级spring boot 为2.0

```

## 服务说明

### 服务模块
```

ngcloud-client  1113
ngcloud-eureka  1111
ngcloud-gateway 1112


路由转发

http://localhost:1112/api-a/hello  --> http://localhost:1113/hello

```

## spring-cloud

- http://blog.csdn.net/forezp/article/details/69696915

- http://blog.csdn.net/forezp/article/details/69788938

- https://springcloud.cc/

- https://github.com/spring-cloud-samples/eureka/tree/master/src/main

- http://spring-cloud.io/reference/eureka/

## gradle 
```
buildscript中的声明是gradle脚本自身需要使用的资源。可以声明的资源包括依赖项、第三方插件、maven仓库地址等。
而在build.gradle文件中直接声明的依赖项、仓库地址等信息是项目自身需要的资源。


远程仓库
有些组织，创建了一些有意思的插件或者library,他们更愿意把这些放在自己的maven库，而不是maven中心库或jcenter。那么当你需要是要这些仓库的时候，你只需要在maven方法中加入url地址就好：
repositories {
       maven {
           url "http://repo.acmecorp.com/maven2"
       }
}

本地依赖
可能有些情况，你需要手动下载jar包，或者你想创建自己的library，这样你就可以复用在不同的项目，而不必将该library publish到公有或者私有库。在上述情况下，可能你不需要网络资源，接下来我将介绍如何是使用这些jar依赖，以及如何导入so包，如何为你的项目添加依赖项目。
文件依赖
如果你想为你的工程添加jar文件作为依赖，你可以这样：

dependencies {
       compile files('libs/domoarigato.jar')
}
如果你这么做，那会很愚蠢，因为当你有很多这样的jar包时，你可以改写为：

dependencies {
       compile fileTree('libs')
}
 
默认情况下，新建的Android项目会有一个lib文件夹，并且会在依赖中这么定义（即添加所有在libs文件夹中的jar）：

dependencies {
       compile fileTree(dir: 'libs', include: ['*.jar'])
}

参考链接：https://segmentfault.com/a/1190000004237922


Gradle 提供了一种名为 extra property 的方法。extra property 是额外属性的意思，在第一次定义该属性的时候需要通过 ext 前缀来标示它是一个额外的属性。定义好之后，后面的存取就不需要 ext 前缀了。ext 属性支持 Project 和 Gradle 对象。即 Project 和 Gradle 对象都可以设置 ext 属性
```

### 多项目构建

http://blog.javachen.com/2015/01/07/build-multi-module-project-with-gradle.html


# Ref
- https://embed.plnkr.co/?show=preview
- https://angular.io/docs/ts/latest/guide/router.html#!#basics-router-outlet

