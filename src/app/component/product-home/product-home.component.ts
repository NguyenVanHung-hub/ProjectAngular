import { Component, ViewChild,ElementRef,AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ShopDataService } from '../shop-data.service';
import { Subscription } from 'rxjs';
import { User } from '../../type/user.type';

@Component({
  selector: 'app-product-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.css'
})
export class ProductHomeComponent implements OnInit,OnDestroy{
  shopProduct: any[] = [];
  products: User[]=[];
  homeProducts: User[]=[];
  constructor(
    private productService: ProductService, 
    private router: Router,
    private shopDataService: ShopDataService) {
    
  }
  private dataSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.loadProducts();
    this.dataSubscription = this.shopDataService.data$.subscribe(data => {
      this.shopProduct = data;
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    
  }

  loadProducts(): void {
    this.dataSubscription.add(
      this.productService.getUser().subscribe(data => {
        this.products = data;
        this.homeProducts=this.products.slice(0, 8)
        // console.log('Loaded products:', this.homeProducts);
      }, error => {
        console.error('Error fetching products:', error);
      })
    );
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

  
  onBuyClick(item: any) {
    this.shopDataService.triggerCssChange(true);
    const { id, image, title, price } = item;
    const exists = this.shopProduct.some(product => product.id === id);

    if (!exists) {
      this.shopProduct.push({ id, image, title, price });
      this.sendData();
    } else {
      alert('Sản phẩm đã có trong giỏ hàng');
    }
  }

  sendData() {
    this.shopDataService.setDataArray(this.shopProduct);
    console.log('du lieu da gui' ,this.shopProduct);
  }
  
}

