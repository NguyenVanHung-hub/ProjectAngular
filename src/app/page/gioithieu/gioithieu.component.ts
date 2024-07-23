import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { IntroduceBannerComponent } from "../../component/introduce-banner/introduce-banner.component";
import { IntroduceComponent } from "../../component/introduce/introduce.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-gioithieu',
  standalone: true,
  imports: [HeaderComponent, IntroduceBannerComponent, IntroduceComponent, FooterComponent,RouterOutlet],
  templateUrl: './gioithieu.component.html',
  styleUrl: './gioithieu.component.css'
})
export class GioithieuComponent {

}
