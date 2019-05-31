import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../../post';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  neki = 'ovo je preko slike nasllov';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts')
      .pipe(
        tap(_ => this.log('fetched posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }
  getPost(id: string): Observable<Post> {
    return this.http.get<Post>('/api/posts/' + id)
      .pipe(
        tap(_ => this.log('fetched post')),
        catchError(this.handleError<Post>('getPost'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }
}
