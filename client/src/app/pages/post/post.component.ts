import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = 'Sample Post';
  url = '../assets/img/post-bg.jpg';
  constructor(private msg: TitleService) {
    msg.changeTitle(this.title);
    msg.changeUrl(this.url);
    msg.changeUrl(this.url);
  }

  ngOnInit() {
  }

}
