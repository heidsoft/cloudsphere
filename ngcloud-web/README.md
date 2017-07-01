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
