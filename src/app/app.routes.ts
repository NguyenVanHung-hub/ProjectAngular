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
import { ProductAdminComponent } from './page-adim/product-admin/product-admin.component';
import { FileComponent } from './page-adim/file/file.component';
import { SettingComponent } from './page-adim/settingA/setting.component';
import { HelpAComponent } from './page-adim/help-a/help-a.component';
import { AddUpdateComponent } from './page-adim/add-update/add-update.component';
import { LayoutClientComponent } from './page/layout-client/layout-client.component';
import { ThantoanComponent } from './page/thantoan/thantoan.component';
import { LayoutAdminComponent } from './page-adim/layout-admin/layout-admin.component';



export const routes: Routes = [
  { path: '', component: LayoutClientComponent, title: "Trang Chu", children:[
    { path: '', component: HomeComponent, title: "Trang Chu" },
    { path: 'product', component: ProductComponent, title: "SanPham" },
    { path: 'product/:id', component: ProductDetailComponent, title: "Detail" },
    { path: 'introduce', component: GioithieuComponent, title: "GioiThieu" },
    { path: 'contact', component: LienheComponent, title: "LienHe" },
    { path: 'SingeIn', component: DangNhapComponent, title: "DangNhap" },
    { path: 'Resgiter', component: DangKyComponent, title: "DangKy" },
    { path: 'Pay', component: ThantoanComponent, title: "ThanhToan", canActivate: [AuthGuard]},
  ] },
  
  { path: 'Admim', component: LayoutAdminComponent, title: "Admim", canActivate: [AuthGuard], children:[
    {path: 'Home', component: HomeAdmimComponent, title: "Admim", canActivate: [AuthGuard]},
    { path: 'Product', component: ProductAdminComponent, title: "productAdmin", canActivate: [AuthGuard] },
    { path: 'File', component: FileComponent, title: "hoso", canActivate: [AuthGuard] },
    { path: 'Setting', component: SettingComponent, title: "CaiDat", canActivate: [AuthGuard] },
    { path: 'Hepl', component: HelpAComponent, title: "TroGiup", canActivate: [AuthGuard] },
    { path: 'Update', component: AddUpdateComponent, title: "Form", canActivate: [AuthGuard] },
  ]},
  
];


