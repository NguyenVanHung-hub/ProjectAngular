import { Component } from '@angular/core';
import { MenuAdminComponent } from "../menu-admin/menu-admin.component";
import { FooterAdminComponent } from "../footer-admin/footer-admin.component";

@Component({
  selector: 'app-file-conten',
  standalone: true,
  imports: [MenuAdminComponent, FooterAdminComponent],
  templateUrl: './file-conten.component.html',
  styleUrl: './file-conten.component.css'
})
export class FileContenComponent {

}
