import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../title.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  angForm: FormGroup;
  title = 'Contact';
  url = '../assets/img/contact-bg.jpg';
  subtitle = '';
  constructor(private msg: TitleService, private fb: FormBuilder) {
    msg.changeTitle(this.title);
    msg.changeUrl(this.url);
    msg.changeSubtitle(this.subtitle);
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }
  get f() {
    return this.angForm.controls;
  }

  onSubmit() {
    if (this.angForm.invalid) {
      return;
    }
    console.log(this.angForm.value);

  }
  revert() {
    this.angForm.reset();
  }

}
