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

