import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse, LoginDTO, RegisterDTO, ResetDTO } from './models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private currentUser = new BehaviorSubject<AuthResponse | null>(null);
  public user$ = this.currentUser.asObservable();

  constructor(private http: HttpClient) {}

  login(data: LoginDTO): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data);
  }

  register(data: RegisterDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  resetPassword(email: string, otp: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, {
      email,
      otp,
      newPassword
    });
  }
  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, { email });
  }

  saveToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.currentUser.next(null);
  }
}
