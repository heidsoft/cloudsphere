import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { ContentComponent } from './resource/content/content.component';
import { MenuListComponent } from './resource/menu/menu.component';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resource', component: ResourceComponent, children: [
    { path: 'list1Content', component: MenuListComponent, outlet: 'list1' },
    { path: 'list2Content', component: ContentComponent, outlet: 'list2' }
  ] },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResourceComponent,
    MenuListComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

