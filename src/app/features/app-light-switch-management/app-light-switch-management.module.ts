import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightSwitchManagementView } from './light-switch-management-view/light-switch-management-view.component';
import { LightSwitchDetailsModal } from './light-switch-details-modal/light-switch-details-modal.component';
import { CoreModule } from '../../core/core.module';
import { EditLightSwitchModal } from './edit-light-switch-modal/edit-light-switch-modal.component';



@NgModule({
  declarations: [
    LightSwitchManagementView,
    LightSwitchDetailsModal,
    EditLightSwitchModal
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
})
export class AppLightSwitchManagementModule { }
