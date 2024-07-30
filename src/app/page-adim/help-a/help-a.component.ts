import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../component-adim/header-admin/header-admin.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-help-a',
  standalone: true,
  imports: [HeaderAdminComponent,RouterOutlet],
  templateUrl: './help-a.component.html',
  styleUrl: './help-a.component.css'
})
export class HelpAComponent {

}
