import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {
  constructor(private router: Router){};
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
