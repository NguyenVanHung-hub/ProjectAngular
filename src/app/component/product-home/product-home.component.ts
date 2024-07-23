import { Component, ViewChild,ElementRef,AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ShopDataService } from '../shop-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.css'
})
export class ProductHomeComponent implements OnInit,OnDestroy{
  shopProduct: any[] = [];
  products: any;
  constructor(
    private productService: ProductService, 
    private router: Router,
    private shopdataService: ShopDataService) {
    this.products = productService.getProduct().slice(0, 8);
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

  
  // onBuyClick(item: any) {
  //   const {id, img, name, price } = item;
    
  //   const exists = this.shopProduct.some(product => product.id === id);

    
  //   if (!exists) {
      
  //     this.shopProduct.push({ id, img, name, price });
  //     this.sendData();
  //     // alert('san pham dax duoc them vao gio hang')
  //   } else {
  //     alert('San pham da co trong gio hang');
  //   }   
  // }
  // sendData() {
  //   this.shopdataService.setDataArray(this.shopProduct);
  //   console.log('du lieu da gui' ,this.shopProduct);
  // }
 
  private dataSubscription: Subscription = new Subscription();
    ngOnInit(): void {
      this.dataSubscription = this.shopdataService.data$.subscribe(data => {
        this.shopProduct = data;
      });
      
      
    }
  
    ngOnDestroy(): void {
      this.dataSubscription.unsubscribe();
    }

    onBuyClick(item: any){
      this.shopdataService.triggerCssChange(true);
      const {id, img, name, price } = item;
      const exists = this.shopProduct.some(product => product.id === id);

    
    if (!exists) {
      
      this.shopProduct.push({ id, img, name, price });
      this.sendData();
      
      
    } else {
      alert('San pham da co trong gio hang');
    }   
  }
  sendData() {
    this.shopdataService.setDataArray(this.shopProduct);
  }
}