import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-mini',
  templateUrl: './profile-mini.component.html',
  styleUrls: ['./profile-mini.component.scss']
})
export class ProfileMiniComponent implements OnInit {

  user: IUser = {
    id: 1,
    name: 'Sobolev Nikita',
    pic: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
