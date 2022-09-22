import {Component, Input, OnInit} from '@angular/core';
import {faComment, faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: IPost
  data: IPost

  favouriteIcon = faHeart
  commentIcon = faComment

  constructor() {}

  ngOnInit(): void {
    this.data = this.post
  }

}
