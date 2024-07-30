import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../component-adim/header-admin/header-admin.component";
import { RouterOutlet } from '@angular/router';
import { FileContenComponent } from "../../component-adim/file-conten/file-conten.component";
@Component({
  selector: 'app-file',
  standalone: true,
  imports: [HeaderAdminComponent, RouterOutlet, FileContenComponent],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {

}
