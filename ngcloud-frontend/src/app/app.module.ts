import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';
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
    routing,
    FormsModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

