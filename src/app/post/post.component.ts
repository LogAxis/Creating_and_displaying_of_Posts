import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  url='';
  posts=[];
  newPost:any ={name:'', imageUrl:'',postData:''};
  postData: string = '';
  constructor(private http:HttpClient){}

  
getPosts() {
  this.http.get<any>('http://localhost:3000/posts').subscribe(response => {
    this.posts = response;
  });
}

onSubmit() {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  this.http.post<any>('http://localhost:3000/posts', this.newPost, { headers }).subscribe(response => {
    this.getPosts(); // Refresh the posts after a new post is created
    this.newPost = { name:'j', imageUrl:'',postData:''}; // Reset the new post object
  });
}
}
