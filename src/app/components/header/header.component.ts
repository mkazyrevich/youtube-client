import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public query: string = '';
  public display: boolean;
  public displayFilter: boolean;

  @Output() public onSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() public onDisplayFilter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  public ngOnInit(): void {
    this.display = false;
    this.displayFilter = false;
  }

  public displaySearchResults(): void {
    this.display = true;
    this.onSearch.emit(this.display);
  }

  public displayFilterSettings(): void {
    this.displayFilter = !this.displayFilter;
    this.onDisplayFilter.emit(this.displayFilter);
  }

}
