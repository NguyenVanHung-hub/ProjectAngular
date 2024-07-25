import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { SingeInComponent } from "../../component/singe-in/singe-in.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dang-nhap',
  standalone: true,
  imports: [HeaderComponent, SingeInComponent, FooterComponent,RouterOutlet],
  templateUrl: './dang-nhap.component.html',
  styleUrl: './dang-nhap.component.css'
})
export class DangNhapComponent {

}
