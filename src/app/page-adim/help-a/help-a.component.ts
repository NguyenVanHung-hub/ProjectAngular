import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../component-adim/header-admin/header-admin.component";
import { RouterOutlet } from '@angular/router';
import { HelpContenComponent } from "../../component-adim/help-conten/help-conten.component";
@Component({
  selector: 'app-help-a',
  standalone: true,
  imports: [HeaderAdminComponent, RouterOutlet, HelpContenComponent],
  templateUrl: './help-a.component.html',
  styleUrl: './help-a.component.css'
})
export class HelpAComponent {

}
