import { Component, OnInit } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.model';
import { response } from 'src/assets/response';

const searchedVideos: ISearchItem[] = response.items;
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public searchedVideos: ISearchItem[];

  constructor() { }

  public ngOnInit(): void {
    this.searchedVideos = searchedVideos;
  }
}
