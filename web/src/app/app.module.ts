import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { TreeListComponent } from './tree.component';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'tree', component: TreeListComponent },
  // { path: '',   redirectTo: '/tree', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TreeListComponent
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

