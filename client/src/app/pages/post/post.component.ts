import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';
import { ActivatedRoute } from '@angular/router';
import {PostServiceService} from '../../services/post/post-service.service';
import {Post} from '../../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = 'Sample Post';
  url = '../assets/img/post-bg.jpg';
  post: Post;
  constructor(private msg: TitleService, private route: ActivatedRoute, private service: PostServiceService) {
    msg.changeUrl(this.url);
    msg.changeUrl(this.url);
  }

  ngOnInit() {
    this.getPost();
  }
  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getPost(id)
      .subscribe(data => {
        this.post = data;
        this.msg.changeTitle(this.post.Title);
      });
  }

}
