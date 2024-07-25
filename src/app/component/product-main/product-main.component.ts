import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ShopDataService } from '../shop-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-main',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,RouterLink],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.css'
})
export class ProductMainComponent implements OnInit,OnDestroy{
  products: any[];
  cartItems: any[] = [];
  currentPage: number = 1; 
  itemsPerPage: number = 8;
  constructor(private productService: ProductService, private router: Router,private shopDataService: ShopDataService) {
    this.products = productService.getProduct()
  }
   
  viewProductDetail(id: string) {
    this.router.navigate(['/product', id]); 
  }
  hoverStates: { [key: number]: boolean } = {};

  setHoverState(index: number, state: boolean) {
    this.hoverStates[index] = state;
  }

  isHovered(index: number): boolean {
    return this.hoverStates[index] || false;
  }

  sortProductPrice1() {
    this.products.sort((a, b) => a.price - b.price);
  }
  sortProductPrice2() {
    this.products.sort((a, b) => b.price - a.price);
  }
  onSortChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (value === 'thapcao') {
      this.sortProductPrice1();
    } else if (value === 'caothap') {
      this.sortProductPrice2();
    } else{
      this.products = this.productService.getProduct();
    }
  }
    
    private dataSubscription: Subscription = new Subscription();
    ngOnInit(): void {
      this.dataSubscription = this.shopDataService.data$.subscribe(data => {
        this.cartItems = data;
      });
      
      
    }
  
    ngOnDestroy(): void {
      this.dataSubscription.unsubscribe();
    }

    onBuyClick(item: any){
      this.shopDataService.triggerCssChange(true);
      const {id, img, name, price } = item;
      const exists = this.cartItems.some(product => product.id === id);
      
      
    
    if (!exists) {
      
      this.cartItems.push({ id, img, name, price });
      this.sendData();
      
      
    } else {
      alert('San pham da co trong gio hang');
    }   
  }
  sendData() {
    this.shopDataService.setDataArray(this.cartItems);
  }
}
