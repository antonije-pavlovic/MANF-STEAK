import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../../post';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }
}
