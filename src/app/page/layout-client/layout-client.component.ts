import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { BannerComponent } from "../../component/banner/banner.component";
import { ProductHotComponent } from "../../component/product-hot/product-hot.component";
import { ProductHomeComponent } from "../../component/product-home/product-home.component";
import { BoxHomeComponent } from "../../component/box-home/box-home.component";
@Component({
  selector: 'app-layout-client',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, HomeComponent, BannerComponent, ProductHotComponent, ProductHomeComponent, BoxHomeComponent],
  templateUrl: './layout-client.component.html',
  styleUrl: './layout-client.component.css'
})
export class LayoutClientComponent {

}
