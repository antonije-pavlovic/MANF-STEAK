import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private jsonURL = 'assets/authorData.json';
  authorData;
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => this.authorData = data, error => console.log(error));
  }
  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
