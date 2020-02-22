import { ColorFromDateDirective } from './color-from-date.directive';

describe('ColorFromDateDirective', () => {
  it('should create an instance', () => {
    const directive: ColorFromDateDirective = new ColorFromDateDirective(this.video, this.color);
    expect(directive).toBeTruthy();
  });
});
