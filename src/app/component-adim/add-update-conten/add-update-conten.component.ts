import { Component, OnInit } from '@angular/core';
import { MenuAdminComponent } from "../menu-admin/menu-admin.component";
import { FooterAdminComponent } from "../footer-admin/footer-admin.component";
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../component/product.service';
import { User } from '../../type/user.type';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
@Component({
  selector: 'app-add-update-conten',
  standalone: true,
  imports: [MenuAdminComponent, FooterAdminComponent,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-update-conten.component.html',
  styleUrl: './add-update-conten.component.css'
})
export class AddUpdateContenComponent implements OnInit{
  formProduct! : FormGroup;
  isEdit: boolean= false;
  id: number | undefined;
  constructor(private productService: ProductService, private router: Router,private route: ActivatedRoute){}

    ngOnInit(): void {
        this.formProduct = new FormGroup({
         title: new FormControl(''),
          image: new FormControl(''),
          price: new FormControl(0),
          catelogy: new FormControl(''),
          conten: new FormControl(''),
        });

        this.route.queryParams.subscribe(params => {
          if (params['id']) {
            this.id = +params['id'];
            this.isEdit = true;
            this.loadProduct();
          }
        });
    };

    loadProduct(): void {
      if (this.id) {
        this.productService.getProductById(this.id).subscribe({
          next: (product) => {
            this.formProduct.patchValue(product);
          },
          error: (err) => {
            console.error('Lỗi', err);
          }
        });
      }
    };


    submitFormProduct(formProduct: User): void{
      const newFormProduct = formProduct;
      if(this.isEdit && this.id !== undefined){
        this.productService.updateProduct(this.id, newFormProduct).subscribe({
          next:() =>{
           alert('Cập Nhật Thành Công');
           this.router.navigate(['/Admim/Product']);
          },
          error:() =>{
           alert('Cập Nhật Thất Bại');
            
          }
        })
      }
      else{
        this.productService.addProduct(newFormProduct).subscribe({
          next:() =>{
           alert('Thêm Thành Công');
           this.router.navigate(['/Admim/Product']);
          },
          error:() =>{
           alert('Thêm Thất Bại');
            
          }
        })
      }
    }
  
}

