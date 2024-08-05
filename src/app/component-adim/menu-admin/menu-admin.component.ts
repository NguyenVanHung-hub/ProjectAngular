import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [NgClass,RouterModule],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent implements OnInit{
  constructor(private router: Router,){};
  
  currenMenu: string ='/Admim/Home';
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currenMenu = event.urlAfterRedirects; 
      }
    });
    this.currenMenu = this.router.url;
  };

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

}
