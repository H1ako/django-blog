import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faComment, faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: IPost

  favouriteIcon = faHeart
  commentIcon = faComment

  @Output() notifyVisibility: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() notifyReplyTo: EventEmitter<ReplyToType> = new EventEmitter<ReplyToType>()

  openCommentModal = (): void => {
    this.notifyVisibility.emit(true)
  }

  openReplyCommentModal(comment: ReplyToType): void {
    this.notifyReplyTo.emit(comment)
    this.openCommentModal()
  }

  constructor() {}

  ngOnInit(): void {
  }

}
