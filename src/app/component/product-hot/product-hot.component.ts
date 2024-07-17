import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-hot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-hot.component.html',
  styleUrl: './product-hot.component.css'
})
export class ProductHotComponent {
  products: any;
  constructor(private productService: ProductService) {
    this.products = productService.getProduct().slice(0, 4);
  }
   
  hoverStates: { [key: number]: boolean } = {};

  setHoverState(index: number, state: boolean) {
    this.hoverStates[index] = state;
  }

  isHovered(index: number): boolean {
    return this.hoverStates[index] || false;
  }
 
}
