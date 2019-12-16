import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { StoreApp } from './../models/store.model'
import * as StoreActions from './../actions/store.actions';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name, url) {                         //wywołanie metody addTutorial
    this.store.dispatch(new StoreActions.AddTutorial({ name: name, url: url }))   //dispatch -> dostarczenie akcji do store
  }

  ngOnInit() {
  }

}
