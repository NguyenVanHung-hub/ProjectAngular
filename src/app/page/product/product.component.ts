import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../component/header/header.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { ProductMainComponent } from "../../component/product-main/product-main.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProductMainComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
