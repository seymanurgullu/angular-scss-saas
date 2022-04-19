import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent {
  @Input()
  title: string;

  @Input()
  money: string;

  @Input()
  image: string;

  @Input()
  tag: string;

  @Input()
  totalMoney: string;

  @Input()
  review: string;

  @Input()
  isSale: boolean;

  @Input()
  rating: number;

  stars: number[];

  constructor() {
    this.stars = Array(5).fill(4);
  }
}
