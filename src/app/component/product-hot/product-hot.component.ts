import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router} from '@angular/router';
import { RouterLink } from '@angular/router';
import { ShopDataService } from '../shop-data.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../type/user.type';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-hot',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,NgbCarouselModule,CarouselModule],
  templateUrl: './product-hot.component.html',
  styleUrl: './product-hot.component.css'
})
export class ProductHotComponent implements OnInit, OnDestroy{
  
  cartItemsHot: any[] = [];
  product: User | undefined;
  products: User[] = [];
  hotProducts: User[] = [];
  constructor(private productService: ProductService, private router: Router, private shopDataService: ShopDataService, private http: HttpClient) {
    
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
 
  private dataSubscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.loadProducts();
    this.dataSubscription = this.shopDataService.data$.subscribe(data => {
      this.cartItemsHot = data;
    }); 
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
  
  loadProducts(): void {
    this.productService.getUser().subscribe(data => {
      this.products = data;
      this.hotProducts = this.products.slice(0, 4);
      // console.log('data', this.hotProducts);
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

  onBuyClick(item: any){
    this.shopDataService.triggerCssChange(true);
    const {id, image, title, price } = item;
    const exists = this.cartItemsHot.some(product => product.id === id);
  if (!exists) {
    
    this.cartItemsHot.push({ id, image, title, price });
    this.sendData();
  } else {
    alert('San pham da co trong gio hang');
  }   
}

sendData() {
  this.shopDataService.setDataArray(this.cartItemsHot);
}


// slider
customOptions: OwlOptions = {
  loop: true,
  nav: true,
  autoplay: true,
  margin:20,
  autoplayTimeout: 3000, 
  autoplayHoverPause: true, 
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
  responsive: {
    0:{
      items:1
    },
    676:{
      items:2
    },
    991:{
      items:4
    },
   
    
  }
}
}
