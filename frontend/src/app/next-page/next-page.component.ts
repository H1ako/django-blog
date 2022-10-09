import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter, Input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss']
})
export class NextPageComponent implements AfterViewInit {
  @Input() onObserve: any
  @ViewChild('loader', {read: ElementRef}) loader: ElementRef
  loading: boolean = true
  isLastPage: boolean = false

  async onClick() {
    this.loading = true
    this.isLastPage = await this.onObserve()
    this.loading = false
  }

  constructor() {}

  ngAfterViewInit(): void {
    const options = {

    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          void this.onClick()
        }
      })
    }, options)
    observer.observe(this.loader.nativeElement)
  }
}
