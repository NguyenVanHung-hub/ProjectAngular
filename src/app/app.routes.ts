import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
export const routes: Routes = [
    {path:'', component: HomeComponent, title: "Trang Chu"},
    {path:'product', component: ProductComponent, title:"SanPham"},
    {path:'product/:id', component: ProductDetailComponent, title:"Detail"}
];
