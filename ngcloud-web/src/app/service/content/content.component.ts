import { Component } from '@angular/core';
import {State} from "clarity-angular";
@Component({
  selector: 'content-app',
  templateUrl: './content.component.html',
})
export class ContentComponent {
  total: number;
  loading: boolean = true;

  refresh(state: State) {
    this.loading = true;
    // We convert the filters from an array to a map,
    // because that's what our backend-calling service is expecting
    let filters:{[prop:string]: any[]} = {};
    if (state.filters) {
      for (let filter of state.filters) {
        let {property, value} = <{property: string, value: string}>filter;
        filters[property] = [value];
      }
    }
  }

}

