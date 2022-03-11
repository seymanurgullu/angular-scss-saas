import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-layout',
  template: `
    <div class="d-flex">
      <app-sidebar [ngClass]="toggleClassSidebar"></app-sidebar>
      <div [ngClass]="toggleClassPage" class="page">
        <app-navbar (toggleSideBar)="toggle()"></app-navbar>
        <div (click)="toggle()">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./challange-layout-component.scss'],
})
export class ChallengeLayoutComponent {
  toggled = false;
  toggleClassSidebar = 'untoggle';
  toggleClassPage = 'unToggledPage';

  toggle(): void {
    if (this.toggled) {
      this.toggleClassSidebar = 'untoggle';
      this.toggleClassPage = 'unToggledPage';
    } else {
      this.toggleClassSidebar = 'toggle';
      this.toggleClassPage = 'toggledPage';
    }
    this.toggled = !this.toggled;
  }
}
