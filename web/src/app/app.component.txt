import { Component } from '@angular/core';
import {Http,URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'app works!';
  constructor(private myjsonp: Http) {
    let wikiUrl = 'http://10.0.2.209:8009/api/login';
    let params = new URLSearchParams();
    params.set('username', 'admin'); // the user's search value
    params.set('password', 'zabbix');
    console.log(myjsonp);
    myjsonp.post(wikiUrl, { search: params }).subscribe((res) => {
       console.log("response......start");
       console.log(res);
       console.log("response......end");
    });
          
    
  }
}
