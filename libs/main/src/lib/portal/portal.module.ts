import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AuthModule } from '@top-secret/auth';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PortalMainComponent } from './portal-main/portal-main.component';
import { PortalRoutingModule } from './portal-routing.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [CommonModule, MatSidenavModule, AuthModule, PortalRoutingModule],
  declarations: [DashboardComponent, PortalMainComponent, SettingsComponent],
})
export class PortalModule {}
