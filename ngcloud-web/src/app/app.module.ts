import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { routing }        from './app.routing';

// used to create fake backend
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AppComponent } from './app.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { CatalogComponent } from './service/catalog.component';
import { ContentComponent } from './service/content/content.component';
import { MenuListComponent } from './service/menu/menu.component';
import { AliyunComponent } from './aliyun/aliyun.component';
import { QiniuComponent } from './qiniu/qiniu.component';
import { QcloudComponent } from './qcloud/qcloud.component';
import { UcloudComponent } from './ucloud/ucloud.component';
import { AwsComponent } from './aws/aws.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    CatalogComponent,
    MenuListComponent,
    ContentComponent,
    AliyunComponent,
    QiniuComponent,
    QcloudComponent,
    UcloudComponent,
    AwsComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    routing,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

