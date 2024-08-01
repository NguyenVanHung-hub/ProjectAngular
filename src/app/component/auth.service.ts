import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080'; 
  private loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());

  // Observable cho trạng thái đăng nhập
  isLoggedIn$ = this.loggedIn.asObservable();
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response && response.user) {
          localStorage.setItem('token', response.user.token);
          this.loggedIn.next(true); 
          // localStorage.setItem('user', JSON.stringify(response.user)); 
        }
      })
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, { name, email, password });
  }
  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false); // Phát tín hiệu người dùng đã đăng xuất
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
