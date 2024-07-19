import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../component/header/header.component";
import { BannerComponent } from "../../component/banner/banner.component";
import { ProductHotComponent } from "../../component/product-hot/product-hot.component";
import { ProductHomeComponent } from "../../component/product-home/product-home.component";
import { BoxHomeComponent } from "../../component/box-home/box-home.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, BannerComponent, ProductHotComponent, ProductHomeComponent, BoxHomeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
