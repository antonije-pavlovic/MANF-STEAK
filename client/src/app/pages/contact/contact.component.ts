import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  url = '../assets/img/contact-bg.jpg';
  constructor(private msg: TitleService) {
    msg.changeTitle(this.title);
    msg.changeUrl(this.url);
  }

  ngOnInit() {
  }

}
