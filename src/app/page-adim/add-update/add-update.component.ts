import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../component-adim/header-admin/header-admin.component";
import { AddUpdateContenComponent } from "../../component-adim/add-update-conten/add-update-conten.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-add-update',
  standalone: true,
  imports: [HeaderAdminComponent, AddUpdateContenComponent,RouterOutlet],
  templateUrl: './add-update.component.html',
  styleUrl: './add-update.component.css'
})
export class AddUpdateComponent {

}
