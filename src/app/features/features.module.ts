import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from '../core/core.module';
import { ConfigModule } from './config/config.module';
import { AppDeviceManagementModule } from './app-device-management/app-device-management.module';
import { AppFixtureManagementModule } from './app-fixture-management/app-fixture-management.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    DashboardModule,
    AppDeviceManagementModule,
    AppFixtureManagementModule,
    ConfigModule,
  ],
})
export class FeaturesModule {
}
