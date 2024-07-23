import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopDataService {

  private readonly localStorageKey = 'cartItems';
  private dataSubject = new BehaviorSubject<any[]>(this.loadFromLocalStorage());
  data$ = this.dataSubject.asObservable();

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


  // Service lưu sự kiện onClick
  private cssChangeSubject = new BehaviorSubject<boolean>(false);
  cssChange$ = this.cssChangeSubject.asObservable();

  triggerCssChange(state: boolean) {
    this.cssChangeSubject.next(state);
  }
}
