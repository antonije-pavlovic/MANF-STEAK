import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  url: string;

  constructor(private msg: TitleService) {
    this.msg.title$.subscribe(title => this.title = title);
    this.msg.url$.subscribe(url => this.url = url);
  }
  ngOnInit() {
  }

}
