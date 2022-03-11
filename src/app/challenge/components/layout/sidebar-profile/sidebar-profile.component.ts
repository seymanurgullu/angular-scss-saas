import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-profile',
  templateUrl: './sidebar-profile.component.html',
  styleUrls: ['./sidebar-profile.component.scss'],
})
export class SidebarProfileComponent {
  @Input()
  userName: string;
}
