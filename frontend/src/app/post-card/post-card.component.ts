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

  openCommentModal = (comment: ReplyToType = null): () => void => {
    return () => {
      this.notifyVisibility.emit(true)
      this.notifyReplyTo.emit(comment)
    }
  }

  constructor() {}

  ngOnInit(): void {
  }

}
