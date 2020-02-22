import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Directive({
  selector: '[appColorFromDate]'
})
export class ColorFromDateDirective {

  @Input() public video: ISearchItem;
  public color: string;
  public publicationDate: string;
  public now: Date;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  public ngOnChanges(): void {
    this.publicationDate = this.video.snippet.publishedAt;
    this.now = new Date();

    if (((this.now.getTime() - Date.parse(this.publicationDate)) / (1000 * 3600 * 24 * 30)) < 1) {
      this.color = 'green';
    }

    if (((this.now.getTime() - Date.parse(this.publicationDate)) / (1000 * 3600 * 24)) < 7) {
      this.color = 'blue';
    }

    if (((this.now.getTime() - Date.parse(this.publicationDate)) / (1000 * 3600 * 24 * 30)) > 6) {
      this.color = 'red';
    }

    if (((this.now.getTime() - Date.parse(this.publicationDate)) / (1000 * 3600 * 24 * 30)) <= 6 &&
    ((this.now.getTime() - Date.parse(this.publicationDate)) / (1000 * 3600 * 24 * 30)) >= 1) {
      this.color = 'orange';
    }

    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.color);
  }
}
