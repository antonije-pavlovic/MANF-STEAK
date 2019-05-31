import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../title.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PostServiceService} from '../../services/post/post-service.service';
import {Post} from '../../post';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createPost: FormGroup;
  title = 'Create new post';
  url = '../assets/img/create-bg.jpg';
  subtitle = '';
  constructor(private msg: TitleService, private fb: FormBuilder, private service: PostServiceService) {
    msg.changeTitle(this.title);
    msg.changeUrl(this.url);
    msg.changeSubtitle(this.subtitle);
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.createPost = this.fb.group({
      Title: ['', Validators.required],
      Subtitle: ['', Validators.required],
      Text: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.createPost.invalid) {
      return;
    }
    this.service.addPost(this.createPost.value)
      .subscribe(msg => {
        console.log(msg);
      });
    console.log();
  }
  get f() {
    return this.createPost.controls;
  }
  revert() {
    this.createPost.reset();
  }
}
