import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/UserService/user.service";

@Component({
  selector: 'app-profile-mini',
  templateUrl: './profile-mini.component.html',
  styleUrls: ['./profile-mini.component.scss']
})
export class ProfileMiniComponent implements OnInit {

  user: UserType = null

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.user.subscribe(user => this.user = user)
  }

}
