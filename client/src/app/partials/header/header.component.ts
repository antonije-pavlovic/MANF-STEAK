import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: Subscription;
  tekst: string;
  constructor(private msg: TitleService) {
    this.title = this.msg.title$.subscribe(title => this.tekst = title);
    console.log(this.title);
  }
  ngOnInit() {
  }

}
