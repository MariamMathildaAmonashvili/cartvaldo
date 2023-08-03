import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  initialValue: number =0;
  counter: BehaviorSubject<number>= new BehaviorSubject<number>(this.initialValue)


  constructor() { }
  add (){
    this.initialValue++;
    this.counter.next(this.initialValue)
    console.log(this.initialValue)

  }
  complete( ){
    this.initialValue--;
    this.counter.next(this.initialValue)
  }
}
  