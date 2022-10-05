import {Component, OnInit} from '@angular/core';
import {PostsService} from "../services/PostsService/posts.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: IPost[] = []
  page: number = 1
  lastPage: number = 1

  isCommentModalVisible: boolean = false
  commentModalReplyTo: ReplyToType = null

  getCommentModalVisibility(isVisible: boolean): void {
    this.isCommentModalVisible = isVisible
  }

  getCommentModalReplyTo = (replyTo: ReplyToType): void => {
    this.commentModalReplyTo = replyTo
  }

  updatePosts() {
    this.page++
    void this.postsService.addPosts(this.postsService.API_NEWS_POSTS_URL, this.page)
  }

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.posts.subscribe(posts => this.posts = posts)
  }
}
