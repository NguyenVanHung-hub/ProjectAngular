import { Component, OnInit } from '@angular/core';
import { MenuAdminComponent } from "../menu-admin/menu-admin.component";
import { FooterAdminComponent } from "../footer-admin/footer-admin.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../component/product.service';
import { User } from '../../type/user.type';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-update-conten',
  standalone: true,
  imports: [MenuAdminComponent, FooterAdminComponent,FormsModule,CommonModule],
  templateUrl: './add-update-conten.component.html',
  styleUrl: './add-update-conten.component.css'
})
export class AddUpdateContenComponent implements OnInit{
  title:string='';
  image:string='';
  price:number=0;
  catelogy:string='';
  conten:string='';
  isEdit: boolean= false;
  id: number | undefined;
  constructor(private productService: ProductService, private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.id = +params['id'];
        this.isEdit = true;
        this.loadProduct(this.id);
      }
    });
  }

  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe(
      (product: User) => {
        this.title = product.title;
        this.image = product.image;
        this.price = product.price;
        this.catelogy = product.catelogy;
        this.conten = product.conten;
      },
      (error) => {
        console.error('Lỗi khi lấy thông tin sản phẩm:', error);
      }
    );
  }

  submit(formValue: User): void {
    const newProduct: User = {
      title: this.title,
      price: this.price,
      conten: this.conten,
      image: this.image,
      catelogy: this.catelogy
    };
    if (this.isEdit && this.id !== undefined) {
      this.productService.updateProduct(this.id, newProduct).subscribe(
        (response) => {
          alert('Cập nhật thành công');
          this.router.navigate(['/ProductAdmin']);
        },
        (error) => {
          alert('Lỗi khi cập nhật sản phẩm:');
          console.log(error);
        }
      );
    } else{
      this.productService.addProduct(newProduct).subscribe(
        (response) => {
          alert('Them thanh cong');
  
          this.router.navigate(['/ProductAdmin']);
        },
        (error) => {
          alert('Lỗi khi thêm sản phẩm:');
          console.log(error);
          
        }
      );
    }  
    } 
}