import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../title.service';
import { AuthorService } from '../../services/author/author.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title = 'About me';
  url = '../assets/img/about-bg.jpg';
  subtitle = '';
  data;
  constructor(private msg: TitleService, private service: AuthorService) {
    msg.changeTitle(this.title);
    msg.changeUrl(this.url);
    msg.changeSubtitle(this.subtitle);
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.service.getJSON()
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
    });
  }
}
