import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ShopDataService } from '../shop-data.service';
import { Subscription } from 'rxjs';
import * as diacritics from 'diacritics';
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
  filteredProducts: any[] = [];
  constructor(private productService: ProductService, private router: Router,private shopDataService: ShopDataService, private route: ActivatedRoute) {
    this.products = productService.getProduct();
    this.filteredProducts = [...this.products];
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

  onSortChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
  
    if (value === 'thapcao') {
      this.sortProductPrice1();
    } else if (value === 'caothap') {
      this.sortProductPrice2();
    } else {
      this.filteredProducts = [...this.products]; // 
    }
  }
  
  sortProductPrice1() {
    this.filteredProducts.sort((a, b) => a.price - b.price);
  }
  
  sortProductPrice2() {
    this.filteredProducts.sort((a, b) => b.price - a.price);
  }
  
    
    private dataSubscription: Subscription = new Subscription();
    ngOnInit(): void {
      this.dataSubscription = this.shopDataService.data$.subscribe(data => {
        this.cartItems = data;
        this.products = this.productService.getProduct();
        this.filteredProducts = [...this.products]; // Initialize filteredProducts
        this.handleRouteParams();
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


  // cn tim kiem
  search: string='';
  handleRouteParams(): void {
    this.route.queryParams.subscribe(params => {
      this.search = params['search'] || '';
      this.doSomethingWithSearch(this.search);
    });
  }
  

  initializeComponent(): void {
    // Logic khởi tạo khác
  }
  doSomethingWithSearch(search: string): void {
    if (!search) {
      this.filteredProducts = [...this.products];
      return;
    }
  
    // Normalize search query (convert to lower case, remove diacritics, and trim)
    const normalizedSearch = diacritics.remove(search.toLowerCase().trim());
  
    this.filteredProducts = this.products.filter(product => {
      // Normalize product name (convert to lower case, remove diacritics, and trim)
      const normalizedProductName = diacritics.remove(product.name.toLowerCase().trim());
      return normalizedProductName.includes(normalizedSearch);
    });
  
    console.log('Search value:', search);
    console.log('Filtered Products:', this.filteredProducts);
    console.log('Normalized Search:', normalizedSearch);
    console.log('Product Names:', this.products.map(p => diacritics.remove(p.name.toLowerCase().trim())));
  }
  
}
