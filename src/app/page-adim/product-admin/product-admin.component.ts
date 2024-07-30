import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../component-adim/header-admin/header-admin.component";
import { RouterOutlet } from '@angular/router';
import { ProAdminContenComponent } from "../../component-adim/pro-admin-conten/pro-admin-conten.component";
@Component({
  selector: 'app-product-admin',
  standalone: true,
  imports: [HeaderAdminComponent, RouterOutlet, ProAdminContenComponent],
  templateUrl: './product-admin.component.html',
  styleUrl: './product-admin.component.css'
})
export class ProductAdminComponent {

}
