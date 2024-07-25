import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgiter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resgiter.component.html',
  styleUrls: ['./resgiter.component.css']
})
export class ResgiterComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(registerForm: NgForm) {
    if (registerForm.valid) {
      if (this.password !== this.confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
      }

      this.authService.register(this.name, this.email, this.password).subscribe(
        response => {
          console.log('Dang Ky Thanh Cong', response);
          alert('Dang Ky Thanh Cong');
          this.router.navigate(['/SingeIn']); 
        },
        error => {
          console.error('Dang Ky That Bai', error);
          alert('Dang Ky That Bai');
        }
      );
    }
  }
}
