import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { resgiterInForm } from '../../type/user.type';

@Component({
  selector: 'app-resgiter',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './resgiter.component.html',
  styleUrls: ['./resgiter.component.css']
})
export class ResgiterComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) {};
  resgiterForm! : FormGroup;
  ngOnInit(): void {
      this.resgiterForm = new FormGroup({
        name: new FormControl('',[Validators.required, Validators.minLength(5)]),
        tel: new FormControl('',[Validators.required, Validators.minLength(10)]),
        gmail: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
      })
  };

  submitResgiterForm(formVlaue: resgiterInForm):void{
    console.log('formVlaue:', formVlaue);
    const{ name, gmail, password, confirmPassword}=formVlaue;
    if(password === confirmPassword){
      this.authService.register(name, gmail, password).subscribe({
        next:(response) =>{
          alert('Đăng Ký Thành Công')
          this.router.navigate(['/SingeIn'])
        },
        error:(err) =>{
          alert('Đăng Ký Không Thành Công')
        }
      }) 
    }else{
     alert('Mật Khẩu Không Khớp')
    }
  }
  
}
