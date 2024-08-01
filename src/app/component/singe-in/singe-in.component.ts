import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singe-in',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './singe-in.component.html',
  styleUrls: ['./singe-in.component.css'],
  
})
export class SingeInComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  formLogIn(loginForm: NgForm) {
    if (loginForm.valid) {
      this.authService.login(this.email, this.password).subscribe(
        response => {
          console.log('Dang Nhap Thanh Cong', response);
          if (response && response.user) {
            // localStorage.setItem('token', response.user.token);
            console.log(this.email,this.password);
            if( this.email === 'admin@admin.com' && this.password === 'admin'){
              this.router.navigate(['/Admim/Home']);
            }else{
              this.router.navigate(['/']);
            }
            
            
          }
        },
        error => {
          console.error('Dang Nhap That Bai', error);
          alert('Tai Khoan Hoac Mat Khau Sai')
        }
      );
    }
   
  }
} 