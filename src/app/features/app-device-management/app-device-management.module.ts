import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDeviceManagementView } from './app-device-management-view/app-device-management-view.component';
import { CoreModule } from '../../core/core.module';
import { AppDeviceManagementEditDeviceModal } from './app-device-management-edit-device-modal/app-device-management-edit-device-modal.component';
import { AppDeviceManagementConnectedStateComponent } from './app-device-management-connected-state/app-device-management-connected-state.component';

@NgModule({
  declarations: [
    AppDeviceManagementView,
    AppDeviceManagementEditDeviceModal,
    AppDeviceManagementConnectedStateComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
})
export class AppDeviceManagementModule {
}
