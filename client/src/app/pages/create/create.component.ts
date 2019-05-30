import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../title.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createPost: FormGroup;
  title = 'Create new post';
  url = '../assets/img/create-bg.jpg';
  constructor(private msg: TitleService, private fb: FormBuilder) {
    msg.changeTitle(this.title);
    msg.changeUrl(this.url);
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.createPost = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      text: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.createPost.invalid) {
      return;
    }
    console.log(this.createPost.value);
  }
  get f() {
    return this.createPost.controls;
  }
  revert() {
    this.createPost.reset();
  }
}
