import { Component} from '@angular/core';
import { NgIf,NgClass } from '@angular/common';
@Component({
  selector: 'app-setting-admin',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './setting-admin.component.html',
  styleUrl: './setting-admin.component.css'
})
export class SettingAdminComponent {
  currentForm: string='profile';
  showProfile(){
    this.currentForm='profile';
  }
  showPassword(){
    this.currentForm='password';
  }
 
}
