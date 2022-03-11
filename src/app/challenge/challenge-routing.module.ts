import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeLayoutComponent } from './challenge-layout.compenent';
import * as _components from './components';

const routes: Routes = [
  {
    path: '',
    component: ChallengeLayoutComponent,
    children: [
      {
        path: '',
        component: _components.DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeRoutingModule {}
