import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { MenuListComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';


@Component({
  selector: 'app-service-catalog',
  templateUrl:'./catalog.component.html'
})
export class CatalogComponent implements OnInit {
  ngOnInit() {

  }
}
