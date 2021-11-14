import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from '../core/core.module';
import { ConfigModule } from './config/config.module';
import { AppDeviceManagementModule } from './app-device-management/app-device-management.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    DashboardModule,
    AppDeviceManagementModule,
    ConfigModule,
  ],
})
export class FeaturesModule {
}
