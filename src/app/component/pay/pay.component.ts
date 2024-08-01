import { Component } from '@angular/core';
import { ShopDataService } from '../shop-data.service';
import { NgFor } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [NgFor,DecimalPipe,CommonModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {
  cartItems: any = { items: [], summary: { totalQuantity: 0, totalPrice: 0 } };
  sum: number=0;
  constructor(private shopDataService: ShopDataService) {}

  ngOnInit(): void {
    this.shopDataService.currentSum.subscribe(sum => this.sum = sum);
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.shopDataService.getCartItems();
    console.log('data:', this.cartItems);
    
    
  }
  
  completePay(): void{
    localStorage.removeItem('cartItems');
    alert('Ban Da Dat Hang Thanh Cong!');
    this.cartItems = [];
    this.sum = 0;
    this.shopDataService.changeSum(this.sum);
  }

}
