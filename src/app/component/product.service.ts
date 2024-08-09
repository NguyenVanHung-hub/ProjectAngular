import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../type/user.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl ='https://dnk8d5-8080.csb.app';

  constructor(private http : HttpClient) {}
  //Tạo 1 danh sách sản phẩm
//  products = [
//    {id:1, name: 'sản phẩm 1', price: 12000,  mota: 'day la mot san pham dep, phuf hop voi moi nguoi' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
//    {id:2, name: 'sản phẩm 2', price: 15000,  mota: 'day la mot san pham dep, phuf hop voi moi nguoi', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
//    {id:3, name: 'sản phẩm 3', price: 10000,  mota: 'day la mot san pham dep, phuf hop voi moi nguoi', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
//    {id:4, name: 'sản phẩm 4', price: 9000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
//    {id:5, name: 'sản phẩm 5', price: 8000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
//    {id:6, name: 'sản phẩm 6', price: 6000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
//    {id:7, name: 'sản phẩm 7', price: 7000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
//    {id:8, name: 'sản phẩm 8', price: 6000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
//    {id:9, name: 'sản phẩm 9', price: 12000,  mota: 'day la mot san pham dep, phuf hop voi moi nguoi' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
//    {id:10, name: 'sản phẩm 10', price: 15000,  mota: 'day la mot san pham dep, phuf hop voi moi nguoi', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
//    {id:11, name: 'sản phẩm 11', price: 10000,  mota: 'day la mot san pham dep, phuf hop voi moi nguoi', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
//    {id:12, name: 'sản phẩm 12', price: 9000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
//    {id:13, name: 'sản phẩm 13', price: 8000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
//    {id:14, name: 'sản phẩm 14', price: 6000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
//    {id:15, name: 'sản phẩm 15', price: 7000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
//    {id:16, name: 'sản phẩm 16', price: 6000, mota: 'day la mot san pham dep, phuf hop voi moi nguoi' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
//  ];
//  getProduct() {
  
//    return this.products;
//  }

 getProductById(id: number): Observable<User> {
  return this.http.get<User>(`${this.apiUrl}/products/${id}`);
}

 getUser(): Observable<User[]>{
  return this.http.get<User[]>(`${this.apiUrl}/products`)
 }
 
 // Thêm sản phẩm mới vào API
 addProduct(newProduct: User): Observable<User> {
  return this.http.post<User>(`${this.apiUrl}/products`, newProduct);
}

  // Cap nhat san pham moi
  updateProduct(id: number, product: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/products/${id}`, product);
  }

  // xoa san pham
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/products/${id}`);
  }

}

