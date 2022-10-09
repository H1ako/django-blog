import { Component, OnInit } from '@angular/core';
import {faRotateRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-loader-icon',
  templateUrl: './loader-icon.component.html',
  styleUrls: ['./loader-icon.component.scss']
})
export class LoaderIconComponent implements OnInit {
  reloadIcon = faRotateRight

  constructor() { }

  ngOnInit(): void {
  }

}
