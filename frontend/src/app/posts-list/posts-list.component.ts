import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() posts: IPost[]

  isCommentModalVisible: boolean = false
  commentModalReplyTo: ReplyToType = null

  getCommentModalVisibility(isVisible: boolean): void {
    this.isCommentModalVisible = isVisible
  }

  getCommentModalReplyTo = (replyTo: ReplyToType): void => {
    this.commentModalReplyTo = replyTo
  }

  constructor() {}

  ngOnInit(): void {
  }
}
