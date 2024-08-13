import { Component } from '@angular/core';

import { MenuAdminComponent } from "../menu-admin/menu-admin.component";
import { FooterAdminComponent } from "../footer-admin/footer-admin.component";

@Component({
  selector: 'app-home-adminconten',
  standalone: true,
  imports: [ MenuAdminComponent, FooterAdminComponent],
  templateUrl: './home-adminconten.component.html',
  styleUrl: './home-adminconten.component.css'
})
export class HomeAdmincontenComponent {

}
