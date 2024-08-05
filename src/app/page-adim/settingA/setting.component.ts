import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../component-adim/header-admin/header-admin.component";
import { RouterOutlet } from '@angular/router';
import { SettingContenComponent } from "../../component-adim/setting-conten/setting-conten.component";
@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [HeaderAdminComponent, RouterOutlet, SettingContenComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

}
