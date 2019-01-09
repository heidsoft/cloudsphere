import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
@Component({
  selector: 'menu-list',
  templateUrl: './menu.component.html',
})
export class MenuListComponent implements OnInit {
  ngOnInit() {
    console.log("init")
  }

}
