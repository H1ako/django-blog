import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/PostsService/posts.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  posts: IPost[] = []
  page: number = 1

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.posts.subscribe(posts => this.posts = posts)
  }
}
