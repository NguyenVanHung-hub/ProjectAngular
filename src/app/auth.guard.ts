// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from './component/auth.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService,
//      private router: Router) {}

//   canActivate(): boolean {
//     const token = localStorage.getItem('token');
//     if (token) {
      
//       return true;
//     } else {
      
//       this.router.navigate(['/SingeIn']);
//       return false;
//     }
//   }
// }

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './component/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (token) {
        return true;
      } else {
        this.router.navigate(['/SingeIn']);
        return false;
      }
    } else {
      this.router.navigate(['/']);
        
      return true;
    }
  }
}
