import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeLayoutComponent } from './challenge-layout.compenent';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as _components from './components';

@NgModule({
  declarations: [
    ChallengeLayoutComponent,
    _components.SidebarComponent,
    _components.SiderbarItemsComponent,
    _components.DashboardComponent,
    _components.SidebarProfileComponent,
    _components.CardComponent,
    _components.ListItemComponent,
    _components.NavbarComponent,
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ChallengeModule {}
