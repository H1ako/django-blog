import { Component, OnInit } from '@angular/core';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  newPostIcon = faPlus

  constructor() {}

  ngOnInit(): void {
  }

}
