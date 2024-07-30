import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderAdminComponent } from "../../component-adim/header-admin/header-admin.component";
import { FooterAdminComponent } from "../../component-adim/footer-admin/footer-admin.component";
import { MenuAdminComponent } from "../../component-adim/menu-admin/menu-admin.component";
import { HomeAdmincontenComponent } from "../../component-adim/home-adminconten/home-adminconten.component";
@Component({
  selector: 'app-home-admim',
  standalone: true,
  imports: [RouterOutlet, HeaderAdminComponent, FooterAdminComponent, MenuAdminComponent, HomeAdmincontenComponent],
  templateUrl: './home-admim.component.html',
  styleUrl: './home-admim.component.css'
})
export class HomeAdmimComponent {
  
}
