import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { RouterModule, Routes } from '@angular/router';
import { routing }        from './app.routing';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/home.component';

import { CatalogComponent } from './service/catalog.component';
import { ContentComponent } from './service/content/content.component';
import { MenuListComponent } from './service/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    CatalogComponent,
    MenuListComponent,
    ContentComponent
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
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

