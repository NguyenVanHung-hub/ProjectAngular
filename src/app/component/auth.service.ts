import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response && response.user) {
          localStorage.setItem('token', response.user.token);
          // localStorage.setItem('user', JSON.stringify(response.user)); 
        }
      })
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, { name, email, password });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  
}
