import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private myTitleValue = '';
  title: BehaviorSubject<string> = new BehaviorSubject<string>(this.myTitleValue);
  title$: Observable<string> = this.title.asObservable();
  constructor() {
  }
  changeTitle(newTitle: string) {
    this.myTitleValue = newTitle;
    this.title.next(this.myTitleValue);
  }
}
