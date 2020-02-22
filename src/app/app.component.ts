import { ViewChild } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public display: boolean;
  public displayFilter: boolean;

  public displayResults(display: boolean): void {
    this.display = display;
  }

  public displayFilterSettings(displayFilter: boolean): void {
    this.displayFilter = displayFilter;
  }
}
