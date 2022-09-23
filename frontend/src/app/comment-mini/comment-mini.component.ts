import { Component, OnInit, Input } from '@angular/core';
import {faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-comment-mini',
  templateUrl: './comment-mini.component.html',
  styleUrls: ['./comment-mini.component.scss']
})
export class CommentMiniComponent implements OnInit {
  favouriteIcon = faHeart

  @Input() comment: IComment
  data: IComment

  constructor() { }

  ngOnInit(): void {
    this.data = this.comment
  }

}
