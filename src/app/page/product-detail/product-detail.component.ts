import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { BannerComponent } from "../../component/banner/banner.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { ProDetaillComponent } from '../../component/pro-detaill/pro-detaill.component';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, FooterComponent, ProDetaillComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
 
}
