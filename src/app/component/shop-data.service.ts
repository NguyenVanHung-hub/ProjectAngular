import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopDataService {

  private readonly localStorageKey = 'cartItems';
  private dataSubject = new BehaviorSubject<any[]>(this.loadFromLocalStorage());
  private sumSource = new BehaviorSubject<number>(0);
  data$ = this.dataSubject.asObservable();
  currentSum = this.sumSource.asObservable();

  constructor() {}

  private loadFromLocalStorage(): any[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToLocalStorage(data: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  }

  setDataArray(data: any[]): void {
    this.dataSubject.next(data);
    this.saveToLocalStorage(data);
  }

  getCartItems(): any {
    const cartItems = localStorage.getItem(this.localStorageKey);
    if (cartItems) {
      return JSON.parse(cartItems);
    }
    return { items: [], summary: { totalQuantity: 0, totalPrice: 0 } };
  }

  changeSum(sum: number): void {
    this.sumSource.next(sum);
  }
  private cssChangeSubject = new BehaviorSubject<boolean>(false);
cssChange$ = this.cssChangeSubject.asObservable();

triggerCssChange(state: boolean) {
  this.cssChangeSubject.next(state);
}
}


