# 修改记录
## 2017-0701
```
ngcloud-web 
1.upgrade angular-cli@1.3-beta
2.upgrade MutationObserver
3.upgrade vmware clarity
4.use yarn package 
5.use json-server as a rest server
```
# bootstrap 
```
.col-xs- 超小屏幕 手机 (<768px)
.col-sm- 小屏幕 平板 (≥768px)
.col-md- 中等屏幕 桌面显示器 (≥992px)
.col-lg- 大屏幕 大桌面显示器 (≥1200px)
```

#start
``
json-server ngcloud.json
ng serve --host 0.0.0.0
``

#router
``
 [routerLink]="['/content', {outlets: {'content': ['list1Content']}}]"
``
