import { Component, OnInit } from '@angular/core';
import { MenuAdminComponent } from "../menu-admin/menu-admin.component";
import { FooterAdminComponent } from "../footer-admin/footer-admin.component";
import { User } from '../../type/user.type';
import { ProductService } from '../../component/product.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-pro-admin-conten',
  standalone: true,
  imports: [MenuAdminComponent, FooterAdminComponent,NgFor,NgIf],
  templateUrl: './pro-admin-conten.component.html',
  styleUrl: './pro-admin-conten.component.css'
})
export class ProAdminContenComponent implements OnInit{
  users: User[] = [];
  constructor(private productService: ProductService, private router: Router){}
  // call Api
  ngOnInit(): void {
      this.getUserFromApi()
  }
  getUserFromApi(): void{
    this.productService.getUser().subscribe(
      (data: User[]) => {
        this.users = data;
        
      },
      error => {
        console.error('Lỗi khi gọi API:', error);
      }
    );
  }

  // cn sua sp

  edit(id: number | undefined){
    if (id !== undefined) {
      this.productService.getProductById(id).subscribe(
        (User) => {
          this.router.navigate(['/Update'], { queryParams: { id: id } });
        },
        (error) => {
          console.error('Lỗi khi lấy thông tin sản phẩm:', error);
        }
      );
    } else {
      alert('loi');
    }
  }

  // xoa san pham
  delete(id: number | undefined): void {
    if (id !== undefined) {
      this.productService.deleteProduct(id).subscribe(
        () => {
          alert('Xóa thành công');
          this.getUserFromApi(); 
        },
        (error) => {
          alert('Lỗi khi xóa sản phẩm:');
          console.error('Lỗi khi xóa sản phẩm:', error);
        }
      );
    } else {
      alert('Lỗi');
    }
  }
}
