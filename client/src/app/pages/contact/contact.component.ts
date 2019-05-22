import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  constructor(private msg: TitleService) {
    msg.changeTitle(this.title);
  }

  ngOnInit() {
  }

}
