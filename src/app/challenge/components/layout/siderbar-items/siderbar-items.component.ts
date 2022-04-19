import { Component, Input } from '@angular/core';
import { SideBarItems } from '@shared/models';

@Component({
  selector: 'app-siderbar-items',
  templateUrl: './siderbar-items.component.html',

})
export class SiderbarItemsComponent {
  @Input()
  title: string;

  @Input()
  items: SideBarItems[] = [];

  @Input()
  container:string;
}
