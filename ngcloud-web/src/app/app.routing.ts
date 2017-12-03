import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CatalogComponent } from './service/catalog.component';
import { ContentComponent } from './service/content/content.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'serviceCatalog', component: CatalogComponent,children: [
      { path: 'content', component: ContentComponent},
    ]},
  ]},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
