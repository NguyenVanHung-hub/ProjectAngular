import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "../../component/contact/contact.component";
@Component({
  selector: 'app-lienhe',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, ContactComponent],
  templateUrl: './lienhe.component.html',
  styleUrl: './lienhe.component.css'
})
export class LienheComponent {

}
