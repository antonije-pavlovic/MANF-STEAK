import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../../post';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
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
  addPost(post: Post): Observable<Post> {
    console.log(post);
    post.Picture = 'slika';
    post.User_id = 1;
    return this.http.post<Post>('/api/posts', post, httpOptions)
      .pipe(
        tap(() => this.log(`added new post`)),
        catchError(this.handleError<Post>('addPost'))
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
