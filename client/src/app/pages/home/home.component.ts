import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  url = '../assets/img/home-bg.jpg';
  constructor(private msg: TitleService) {
    msg.changeTitle(this.title);
    msg.changeUrl(this.url);
  }

  ngOnInit() {
  }

}
