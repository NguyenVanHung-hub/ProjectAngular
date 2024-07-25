import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { SingeInComponent } from "../../component/singe-in/singe-in.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { ResgiterComponent } from "../../component/resgiter/resgiter.component";

@Component({
  selector: 'app-dang-ky',
  standalone: true,
  imports: [HeaderComponent, SingeInComponent, FooterComponent, RouterOutlet, ResgiterComponent],
  templateUrl: './dang-ky.component.html',
  styleUrl: './dang-ky.component.css'
})
export class DangKyComponent {

}
