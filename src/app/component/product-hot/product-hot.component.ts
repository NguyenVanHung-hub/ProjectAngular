import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router} from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-hot',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './product-hot.component.html',
  styleUrl: './product-hot.component.css'
})
export class ProductHotComponent {
  products: any;
  constructor(private productService: ProductService, private router: Router) {
    this.products = productService.getProduct().slice(0, 4);
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
