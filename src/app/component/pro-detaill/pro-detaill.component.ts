import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
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
  productDetail: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    this.products = productService.getProduct()
  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.findProduct();
    });
  }

  findProduct(): void {
    if (this.productId) {
      this.productDetail = this.products.find(product => product.id == this.productId);
    }
  }

 
}