import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge-layout',
  template: `
    <div class="flex">
      <app-sidebar [ngClass]="toggleClassSidebar"></app-sidebar>
      <div [ngClass]="toggleClassPage" class="page">
        <app-navbar (toggleSideBar)="toggle()"></app-navbar>
        <div (click)="outsideClick()">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./challenge.layout.component.scss']
})

export class ChallengeLayoutComponent {
  toggled = false;
  toggleClassSidebar = 'md:block hidden';
  toggleClassPage = '';

  toggle(): void {
    this.toggleClassSidebar =
      'block fixed md:static md:z-0 z-1 md:h-auto h-screen';
    this.toggleClassPage =
      'overflow-y-hidden md:overflow-y-auto block toggledPage';
    this.toggled = true;
  }

  outsideClick() {
    if (this.toggled) {
      this.toggleClassSidebar = 'md:block hidden';
      this.toggleClassPage = '';
      this.toggled = false;
    }
  }
}

