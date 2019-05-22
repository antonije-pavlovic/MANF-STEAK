import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'About';
  constructor(private msg: TitleService) {
    msg.changeTitle(this.title);
  }

  ngOnInit() {
  }

}
