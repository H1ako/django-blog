import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss']
})
export class NextPageComponent implements OnInit {
  @Input() observable: Element
  @Output() onObserve: EventEmitter<any> = new EventEmitter<any>()

  constructor() {
    const options = {

    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        console.log(e.target)
      })
    }, options)
    observer.observe(this.observable)
  }

  ngOnInit(): void {
  }

}
