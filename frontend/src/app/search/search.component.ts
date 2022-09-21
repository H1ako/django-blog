import {Component, Input, OnInit} from '@angular/core';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchIcon = faMagnifyingGlass

  private _searchQuery: string = ''

  @Input() set searchQuery(query: string) {
    this._searchQuery = query;
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  constructor() { }
  ngOnInit(): void {
  }
}
