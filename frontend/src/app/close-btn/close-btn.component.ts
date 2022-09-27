import {Component, Input, OnInit} from '@angular/core';
import {faClose, faX} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'close-btn',
  templateUrl: './close-btn.component.html',
  styleUrls: ['./close-btn.component.scss']
})
export class CloseBtnComponent implements OnInit {
  @Input() onClose: () => void

  btnIcon = faClose

  constructor() { }

  ngOnInit(): void {
  }

}
