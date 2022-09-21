import { Component, OnInit } from '@angular/core';
import { faHouse, faNewspaper } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  homeIcon = faNewspaper
  postsIcon = faHouse

  constructor() { }

  ngOnInit(): void {
  }

}
