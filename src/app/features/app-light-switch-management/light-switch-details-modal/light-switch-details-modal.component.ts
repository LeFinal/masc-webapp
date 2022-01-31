import { Component } from '@angular/core';
import { LightSwitch, LightSwitchType } from '../../../core/models/light-switches';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import { RoleLightSwitchManagerService } from '../../../core/services/role-light-switch-manager.service';
import { ConfirmModal } from '../../../core/components/modals/confirm-modal/confirm-modal.component';
import { EditLightSwitchModal } from '../edit-light-switch-modal/edit-light-switch-modal.component';

export interface LightSwitchDetailsModalOptions {
  lightSwitch: LightSwitch;
}

@Component({
  selector: 'app-light-switch-details-modal',
  templateUrl: './light-switch-details-modal.component.html',
  styleUrls: ['./light-switch-details-modal.component.scss'],
})
export class LightSwitchDetailsModal extends SimpleModalComponent<LightSwitchDetailsModalOptions, undefined>
  implements LightSwitchDetailsModalOptions {

  lightSwitch: LightSwitch = {
    id: -1,
    device_id: '',
    provider_id: '',
    is_online: false,
    last_seen: new Date(),
    features: [],
    type: LightSwitchType.HiLo,
    assignments: [],
  };

  constructor(private lightSwitchManagerService: RoleLightSwitchManagerService, private modalService: SimpleModalService) {
    super();
  }

  /**
   * Opens a confirmation modal for deletion and then deletes the light switch if confirmed.
   */
  delete(): void {
    this.modalService.addModal(ConfirmModal, {
      title: 'Delete Light Switch',
      prompt: 'Do you really want to delete the light switch?',
      color: 'danger',
    }).subscribe(confirmed => {
      if (!confirmed) {
        return;
      }
      this.lightSwitchManagerService.deleteLightSwitchByID(this.lightSwitch.id);
      this.close().then();
    });
  }

  /**
   * Opens a modal for editing the light switch.
   */
  edit(): void {
    this.modalService.addModal(EditLightSwitchModal, {
      content: {
        light_switch_id: this.lightSwitch.id,
        name: this.lightSwitch.name,
        assignments: this.lightSwitch.assignments,
      },
    }).subscribe(() => this.close());
  }
}
