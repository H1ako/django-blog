import { Component, OnInit } from '@angular/core';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.scss']
})
export class AsidebarComponent implements OnInit {
  favouritesIcon = faHeart

  constructor() { }

  ngOnInit(): void {
  }

}
