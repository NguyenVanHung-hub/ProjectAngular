import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderAdminComponent } from "../../component-adim/header-admin/header-admin.component";
import { FooterAdminComponent } from "../../component-adim/footer-admin/footer-admin.component";
@Component({
  selector: 'app-home-admim',
  standalone: true,
  imports: [RouterOutlet, HeaderAdminComponent, FooterAdminComponent],
  templateUrl: './home-admim.component.html',
  styleUrl: './home-admim.component.css'
})
export class HomeAdmimComponent {
  constructor(private router: Router){};
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
