import { Component, OnInit } from '@angular/core';
import {faComment} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-new-comment-modal',
  templateUrl: './new-comment-modal.component.html',
  styleUrls: ['./new-comment-modal.component.scss']
})
export class NewCommentModalComponent implements OnInit {
  sendIcon = faComment

  constructor() { }

  ngOnInit(): void {
  }

}
