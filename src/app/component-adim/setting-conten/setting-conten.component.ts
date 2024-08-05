import { Component} from '@angular/core';
import { NgIf,NgClass } from '@angular/common';
@Component({
  selector: 'app-setting-conten',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './setting-conten.component.html',
  styleUrl: './setting-conten.component.css'
})
export class SettingContenComponent {
  currentForm: string='profile';
  showProfile(){
    this.currentForm='profile';
  }
  showPassword(){
    this.currentForm='password';
  }
 
}
