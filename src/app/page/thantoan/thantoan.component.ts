import { Component } from '@angular/core';
import { PayComponent } from "../../component/pay/pay.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-thantoan',
  standalone: true,
  imports: [PayComponent,RouterOutlet],
  templateUrl: './thantoan.component.html',
  styleUrl: './thantoan.component.css'
})
export class ThantoanComponent {

}
