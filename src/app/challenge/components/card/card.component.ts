import { Component, Input } from '@angular/core';
import { variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',

})
export class CardComponent {
  @Input()
  imageSrc: string;

  @Input()
  title: string;

  @Input()
  rating: string;

  @Input()
  description: string;

  @Input()
  money: string;
}
