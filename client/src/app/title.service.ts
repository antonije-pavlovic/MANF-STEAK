import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private myTitleValue = '';
  title: BehaviorSubject<string> = new BehaviorSubject<string>(this.myTitleValue);
  title$: Observable<string> = this.title.asObservable();

  private mySubTitleValue = '';
  subtitle: BehaviorSubject<string> = new BehaviorSubject<string>(this.mySubTitleValue);
  subtitle$: Observable<string> = this.subtitle.asObservable();


  private myUrlValue = '';
  url: BehaviorSubject<string> = new BehaviorSubject<string>(this.myUrlValue);
  url$: Observable<string> = this.url.asObservable();
  constructor() {
  }
  changeTitle(newTitle: string) {
    this.myTitleValue = newTitle;
    this.title.next(this.myTitleValue);
  }
  changeUrl(newUrl: string) {
    this.myUrlValue = newUrl;
    this.url.next(this.myUrlValue);
  }
  changeSubtitle(newSubtitle: string) {
    this.mySubTitleValue = newSubtitle;
    this.subtitle.next(this.mySubTitleValue);
  }
}
