import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-profile',
  templateUrl: './sidebar-profile.component.html',

})
export class SidebarProfileComponent {
  @Input()
  userName: string;
}
