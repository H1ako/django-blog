import { Component, OnInit } from '@angular/core';
import { faGear, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  settingsIcon = faGear
  notificationsIcon = faBell

  constructor() { }

  ngOnInit(): void {
  }

}
