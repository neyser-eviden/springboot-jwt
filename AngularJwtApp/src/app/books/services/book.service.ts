import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../users/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];

  private url: string = 'http://localhost:8080/api/books';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    this.headers = this.addAuthorizationHeader();
  }

  private addAuthorizationHeader(): HttpHeaders {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  private isNotAuthorized(e): boolean {
    if (e.status == 401) {
      this.router.navigate(['login']);
      return true;
    }

    if (e.status == 403) {
      this.router.navigate(['login']);
      return true;
    }

    return false;
  }

  findAll(): Observable<Book[]> {
    const headers = this.addAuthorizationHeader();
    return this.http
      .get<Book[]>(this.url, { headers: this.headers })
      .pipe(map((response: any) => response as Book[]));
  }

  create(book: Book): Observable<Book> {
    const headers = this.addAuthorizationHeader();
    return this.http.post<Book>(this.url, book, { headers: this.headers });
  }

  update(book: Book): Observable<Book> {
    const headers = this.addAuthorizationHeader();
    return this.http.put<Book>(this.url, book, { headers: this.headers });
  }

  remove(id: number): Observable<void> {
    const headers = this.addAuthorizationHeader();
    return this.http.delete<void>(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }
}
