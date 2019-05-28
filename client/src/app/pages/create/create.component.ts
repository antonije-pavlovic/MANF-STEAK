import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  title = 'Create new post';
  url = '../assets/img/create-bg.jpg';
  constructor(private msg: TitleService, private fb: FormBuilder) {
    msg.changeTitle(this.title);
    msg.changeUrl(this.url);
  }

  ngOnInit() {
  }

}
