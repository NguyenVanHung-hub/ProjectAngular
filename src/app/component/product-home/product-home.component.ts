import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.css'
})
export class ProductHomeComponent {
  products: any;
  constructor(private productService: ProductService, private router: Router) {
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
}