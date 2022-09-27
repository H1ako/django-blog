import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faComment} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-new-comment-modal',
  templateUrl: './new-comment-modal.component.html',
  styleUrls: ['./new-comment-modal.component.scss']
})
export class NewCommentModalComponent implements OnInit {
  sendIcon = faComment

  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() replyTo: ReplyToType = null
  text: string = ''

  onClose = (): void => {
    this.notify.emit(false)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
