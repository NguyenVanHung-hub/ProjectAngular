import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { GioithieuComponent } from './page/gioithieu/gioithieu.component';
import { LienheComponent } from './page/lienhe/lienhe.component';
import { DangNhapComponent } from './page/dang-nhap/dang-nhap.component';
import { DangKyComponent } from './page/dang-ky/dang-ky.component';
import { AuthGuard } from './auth.guard';
import { LayoutClientComponent } from './page/layout-client/layout-client.component';
import { ThantoanComponent } from './page/thantoan/thantoan.component';
import { LayoutAdminComponent } from './page-adim/layout-admin/layout-admin.component';
import { HomeAdminComponent } from './component-adim/home-admin/home-admin.component';
import { ProductAdminComponent } from './component-adim/product-admin/product-admin.component';
import { FileAdminComponent } from './component-adim/file-admin/file-admin.component';
import { SettingAdminComponent } from './component-adim/setting-admin/setting-admin.component';
import { HelpAdminComponent } from './component-adim/help-admin/help-admin.component';
import { AddUpdateProductComponent } from './component-adim/add-update-product/add-update-product.component';



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
    {path: 'Home', component: HomeAdminComponent, title: "Admim", canActivate: [AuthGuard]},
    { path: 'Product', component:ProductAdminComponent , title: "productAdmin", canActivate: [AuthGuard] },
    { path: 'File', component:FileAdminComponent , title: "hoso", canActivate: [AuthGuard] },
    { path: 'Setting', component: SettingAdminComponent, title: "CaiDat", canActivate: [AuthGuard] },
    { path: 'Hepl', component: HelpAdminComponent, title: "TroGiup", canActivate: [AuthGuard] },
    { path: 'Update', component: AddUpdateProductComponent, title: "Form", canActivate: [AuthGuard] },
  ]},
  
];


