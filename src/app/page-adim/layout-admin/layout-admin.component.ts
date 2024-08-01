import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../component-adim/header-admin/header-admin.component";
import { HomeAdmincontenComponent } from "../../component-adim/home-adminconten/home-adminconten.component";
import { RouterOutlet } from '@angular/router';
import { MenuAdminComponent } from "../../component-adim/menu-admin/menu-admin.component";
import { FooterAdminComponent } from "../../component-adim/footer-admin/footer-admin.component";

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [HeaderAdminComponent, HomeAdmincontenComponent, RouterOutlet, MenuAdminComponent, FooterAdminComponent],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export class LayoutAdminComponent {

}
