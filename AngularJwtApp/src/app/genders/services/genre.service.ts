import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private genre: Genre[] = [];

  private url: string = 'http://localhost:8080/api/genders';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Genre[]> {
    return this.http
      .get<Genre[]>(this.url)
      .pipe(map((response: any) => response as Genre[]));
  }

  create(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.url, genre);
  }

  update(genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(this.url, genre);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
