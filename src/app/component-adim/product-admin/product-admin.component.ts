import { Component, OnInit } from '@angular/core';
import { User } from '../../type/user.type';
import { ProductService } from '../../component/product.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-admin',
  standalone: true,
  imports: [NgFor,NgIf,NgxPaginationModule],
  templateUrl: './product-admin.component.html',
  styleUrl: './product-admin.component.css'
})
export class ProductAdminComponent implements OnInit{
  users: User[] = [];
  page: number=1;
  itemPage: number= 15;
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
          this.router.navigate(['/Admim/Update'], { queryParams: { id: id } });
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
