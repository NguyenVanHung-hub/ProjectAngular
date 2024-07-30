import { Component } from '@angular/core';
import { HomeAdmimComponent } from "../../page-adim/home-admim/home-admim.component";
import { MenuAdminComponent } from "../menu-admin/menu-admin.component";
import { FooterAdminComponent } from "../footer-admin/footer-admin.component";

@Component({
  selector: 'app-home-adminconten',
  standalone: true,
  imports: [HomeAdmimComponent, MenuAdminComponent, FooterAdminComponent],
  templateUrl: './home-adminconten.component.html',
  styleUrl: './home-adminconten.component.css'
})
export class HomeAdmincontenComponent {

}
