import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() posts: IPost[]
  data: IPost[]

  isCommentModalVisible: boolean = true
  commentModalReplyTo: null | IdType | IUser = null
  commentModalText: string = ''

  constructor() { }

  clearModal(): void {
    this.isCommentModalVisible = false
    this.commentModalReplyTo = null
    this.commentModalText = ''
  }

  ngOnInit(): void {
    this.data = this.posts
  }

}
