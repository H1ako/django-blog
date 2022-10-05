import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss']
})
export class NextPageComponent implements AfterViewInit {
  @Output() onObserve: EventEmitter<any> = new EventEmitter<any>()
  @ViewChild('loader', {read: ElementRef}) loader: ElementRef

  constructor() {}

  ngAfterViewInit(): void {
    const options = {

    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.onObserve.emit()
        }
      })
    }, options)
    observer.observe(this.loader.nativeElement)
  }

}
