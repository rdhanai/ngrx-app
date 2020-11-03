import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {increement, decreement, reset } from './counter.actions'; 

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$ : Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.pipe(select('count'));
   }

  ngOnInit(): void {
  }

  increement() {
    this.store.dispatch(increement());
  }

  decreement() {
    this.store.dispatch(decreement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
