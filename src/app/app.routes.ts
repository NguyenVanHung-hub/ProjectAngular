import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { GioithieuComponent } from './page/gioithieu/gioithieu.component';
import { LienheComponent } from './page/lienhe/lienhe.component';
import { DangNhapComponent } from './page/dang-nhap/dang-nhap.component';
import { DangKyComponent } from './page/dang-ky/dang-ky.component';
import { HomeAdmimComponent } from './page-adim/home-admim/home-admim.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Trang Chu" },
  { path: 'product', component: ProductComponent, title: "SanPham" },
  { path: 'product/:id', component: ProductDetailComponent, title: "Detail" },
  { path: 'introduce', component: GioithieuComponent, title: "GioiThieu" },
  { path: 'contact', component: LienheComponent, title: "LienHe" },
  { path: 'SingeIn', component: DangNhapComponent, title: "DangNhap" },
  { path: 'Resgiter', component: DangKyComponent, title: "DangKy" },
  { path: 'AdmimHome', component: HomeAdmimComponent, title: "Admim", canActivate: [AuthGuard] },
];


