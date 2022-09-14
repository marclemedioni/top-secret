import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PortalMainComponent } from './portal-main/portal-main.component';
import { SettingsComponent } from './settings/settings.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PortalMainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
