import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { StoreApp } from './../models/store.model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import * as StoreActions from './../actions/store.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  stores: Observable<StoreApp[]>;

  constructor(private store: Store<AppState>) {
    this.stores = store.select('store');
  }

    delStore(index){
      this.store.dispatch(new StoreActions.RemoveTutorial(index))
    }

  ngOnInit() {
  }

}
