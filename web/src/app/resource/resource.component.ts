import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { MenuListComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';


@Component({
  selector: 'resource-app',
  templateUrl: './resource.component.html',
})
export class ResourceComponent implements OnInit {
  ngOnInit() {

  }
}
