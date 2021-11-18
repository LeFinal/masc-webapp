import { Component } from '@angular/core';
import { Device } from '../../../core/models/devices';
import { RoleDeviceManagerService } from '../../../core/services/role-device-manager.service';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import { getRoleByStr } from '../../../core/models/acting';
import { PromptTextInputModal } from '../../../core/components/modals/prompt-text-input-modal/prompt-text-input-modal.component';
import { ConfirmModal } from '../../../core/components/modals/confirm-modal/confirm-modal.component';

export interface AppDeviceManagementEditDeviceModalOptions {
  device: Device;
}

/**
 * Modal for editing a device.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-app-device-management-edit-device-modal',
  templateUrl: './app-device-management-edit-device-modal.component.html',
  styleUrls: ['./app-device-management-edit-device-modal.component.scss'],
})
export class AppDeviceManagementEditDeviceModal extends SimpleModalComponent<AppDeviceManagementEditDeviceModalOptions, undefined>
  implements AppDeviceManagementEditDeviceModalOptions {

  getRoleByStr = getRoleByStr;

  /**
   * The device to edit.
   */
  device: Device = { id: '', is_connected: false, last_seen: new Date(), self_description: '' };

  constructor(private deviceManagerService: RoleDeviceManagerService, private modalService: SimpleModalService) {
    super();
  }

  /**
   * Opens a confirmation modal for deletion and then deletes the device if confirmed.
   */
  delete(): void {
    this.modalService.addModal(ConfirmModal, {
      title: 'Delete Device',
      prompt: 'Do you really want to delete the device?',
      color: 'danger',
    }).subscribe(confirmed => {
      if (!confirmed) {
        return;
      }
      this.deviceManagerService.deleteDevice(this.device.id);
      this.close().then();
    });
  }

  /**
   * Opens an edit modal for setting the device name.
   */
  editName(): void {
    this.modalService.addModal(PromptTextInputModal, {
      title: 'Edit Name',
      prompt: 'Enter the new device name:',
      defaultValue: this.device.name,
      hint: 'Device name',
    }).subscribe(name => {
      if (name === undefined) {
        return;
      }
      this.deviceManagerService.setDeviceName(this.device.id, name);
      this.close().then();
    });
  }
}
