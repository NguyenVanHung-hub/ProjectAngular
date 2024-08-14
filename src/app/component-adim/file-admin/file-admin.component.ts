import { Component } from '@angular/core';
import { MenuAdminComponent } from "../menu-admin/menu-admin.component";
import { FooterAdminComponent } from "../footer-admin/footer-admin.component";

@Component({
  selector: 'app-file-admin',
  standalone: true,
  imports: [MenuAdminComponent, FooterAdminComponent],
  templateUrl: './file-admin.component.html',
  styleUrl: './file-admin.component.css'
})
export class FileAdminComponent {

}
