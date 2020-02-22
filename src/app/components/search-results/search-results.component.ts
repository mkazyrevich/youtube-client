// import { display } from 'src/app/components/search/search.component';
import { Component, OnInit, ViewChild, ElementRef, Inject, Input } from '@angular/core';
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
  @Input() public display: boolean;

  constructor() {
  }

  public ngOnInit(): void {
    this.searchedVideos = searchedVideos;
  }

}
