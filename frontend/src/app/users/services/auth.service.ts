import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User;
  private _token: string;
  private _role: string;

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public get user(): User {
    if (this._user != null) {
      return this._user;
    } else if (this._user == null && sessionStorage.getItem('user') != null) {
      this._user = JSON.parse(sessionStorage.getItem('user')) as User;
      return this._user;
    }
    return new User();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  login(user: User): Observable<any> {
    const url: string = `${this.baseUrl}/login`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, user, { headers: httpHeaders });
  }

  saveUser(accessToken: string): void {
    let payload = this.getDataToken(accessToken);
    this._user = new User();
    this._user.username = payload.username;
    sessionStorage.setItem('user', JSON.stringify(this._user));
  }
  saveToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  saveRole(accessToken: string): void {
    let payload = this.getDataToken(accessToken);
    this._role = payload.authorities;
    sessionStorage.setItem('role', JSON.stringify(this._role));
  }

  getDataToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.getDataToken(this.token);

    if (payload != null && payload.username && payload.username.length > 0) {
      return true;
    }
    return false;
  }

  logout(): void {
    this._token = null;
    this._user = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
}
