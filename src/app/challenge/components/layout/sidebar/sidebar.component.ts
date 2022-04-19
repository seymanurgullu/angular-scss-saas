import { Component } from '@angular/core';
import { SideBarItems } from '@shared/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {
  favouriteSideBarItems: SideBarItems[] = [
    { text: 'Dashboard', icon: 'icon-home', isActive: true },
    { text: 'Bookmarks', icon: 'icon-bookmark' },
    { text: 'Team', icon: 'icon-users' },
    { text: 'Messages', icon: 'icon-comments', badge: 3 },
    { text: 'Calendar', icon: 'icon-calendar' },
  ];

  applicationSideBarItems: SideBarItems[] = [
    { text: 'Projects', icon: 'icon-folder' },
    { text: 'Reports', icon: 'icon-chart' },
    { text: 'Settings', icon: 'icon-cog' },
  ];
}
