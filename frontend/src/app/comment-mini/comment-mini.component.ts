import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'comment-mini',
  templateUrl: './comment-mini.component.html',
  styleUrls: ['./comment-mini.component.scss']
})
export class CommentMiniComponent implements OnInit {
  favouriteIcon = faHeart

  @Input() comment: IPostComment
  @Output() onReply: EventEmitter<ReplyToType> = new EventEmitter()

  reply(): void {
    this.onReply.emit(null);
  }

  constructor() { }

  ngOnInit(): void {}

}
