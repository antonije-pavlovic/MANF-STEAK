import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { ContactComponent } from './pages/contact/contact.component';
import {CreateComponent} from './pages/create/create.component';

const routes: Routes = [
  { path: 'about' , component: AboutComponent ,  data: {state: 'About'}},
  { path: 'contact' , component: ContactComponent , data: {state: 'Contact'}},
  { path: 'post' , component: PostComponent ,  data: {state: 'Post'}},
  { path: 'home' , component: HomeComponent, data: {state: 'Home'} },
  { path: 'create' , component: CreateComponent , data: {state : 'Create'}},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
