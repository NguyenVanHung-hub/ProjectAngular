import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { logInForm } from '../../type/user.type';
import { response } from 'express';
import { error, log } from 'console';
@Component({
  selector: 'app-singe-in',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './singe-in.component.html',
  styleUrls: ['./singe-in.component.css'],
  
})
export class SingeInComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) {}
  logInForm! : FormGroup;
  ngOnInit(): void{
    this.logInForm = new FormGroup({
      gmail: new FormControl(''),
      password: new FormControl('')
    })
  };

  submitLogInForm(formVlaue: logInForm): void{
   const {gmail, password} = formVlaue;
    this.authService.login(gmail, password).subscribe({
      next:(response) =>{
        if(response && response.user.name ==='Admin' && response.user.email==='admin@admin.com'){
          this.router.navigate(['/Admim/Home'])
        } else{
          this.router.navigate(['/']) 
        }
      },
      error:(err) =>{
        alert('Sai Tên Gamil Hoặc Mật Khẩu')
      }
    })
  }
} 