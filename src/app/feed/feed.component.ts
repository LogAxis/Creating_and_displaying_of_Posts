import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get<any>('http://localhost:3000/posts').subscribe(response => {
      this.posts = response;
    });
  }

}
