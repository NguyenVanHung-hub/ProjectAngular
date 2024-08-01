import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { User } from '../../type/user.type';
@Component({
  selector: 'app-pro-detaill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pro-detaill.component.html',
  styleUrl: './pro-detaill.component.css'
})
export class ProDetaillComponent {
  products: any[]=[];
  productId: any | null = '';
  productDetail: User | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    
  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.findProduct();
    });
    this.loadProducts();
  }
  loadProducts(): void {
    this.productService.getUser().subscribe({
      next: (data: User[]) => {
        this.products = data;
        this.findProduct();
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
  findProduct(): void {
    if (this.productId) {
      this.productDetail = this.products.find(product => product.id == this.productId);
    }
  }

 
}