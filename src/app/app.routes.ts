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
import { HomeAdmincontenComponent } from './component-adim/home-adminconten/home-adminconten.component';
import { ProAdminContenComponent } from './component-adim/pro-admin-conten/pro-admin-conten.component';
import { FileContenComponent } from './component-adim/file-conten/file-conten.component';
import { SettingContenComponent } from './component-adim/setting-conten/setting-conten.component';
import { HelpContenComponent } from './component-adim/help-conten/help-conten.component';
import { AddUpdateContenComponent } from './component-adim/add-update-conten/add-update-conten.component';



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
    {path: 'Home', component: HomeAdmincontenComponent, title: "Admim", canActivate: [AuthGuard]},
    { path: 'Product', component:ProAdminContenComponent , title: "productAdmin", canActivate: [AuthGuard] },
    { path: 'File', component:FileContenComponent , title: "hoso", canActivate: [AuthGuard] },
    { path: 'Setting', component: SettingContenComponent, title: "CaiDat", canActivate: [AuthGuard] },
    { path: 'Hepl', component: HelpContenComponent, title: "TroGiup", canActivate: [AuthGuard] },
    { path: 'Update', component: AddUpdateContenComponent, title: "Form", canActivate: [AuthGuard] },
  ]},
  
];


