import { Component } from '@angular/core';
import { Device } from '../../../core/models/devices';
import { RoleDeviceManagerService } from '../../../core/services/role-device-manager.service';
import { SubscriptionComponent } from '../../../core/components/subscription-component';
import { SimpleModalService } from 'ngx-simple-modal';
import { AppDeviceManagementEditDeviceModal } from '../app-device-management-edit-device-modal/app-device-management-edit-device-modal.component';

@Component({
  selector: 'app-app-device-management-view',
  templateUrl: './app-device-management-view.component.html',
  styleUrls: ['./app-device-management-view.component.scss'],
})
export class AppDeviceManagementView extends SubscriptionComponent {

  hired = false;

  /**
   * List of devices.
   */
  deviceList?: Device[];

  constructor(private roleService: RoleDeviceManagerService, private modalService: SimpleModalService) {
    super();
    super.pushS(this.roleService.getDeviceList().subscribe(list => this.deviceList = list));
    super.pushS(this.roleService.getOK().subscribe(() => this.refreshDevices()));
    super.pushS(this.roleService.getHired().subscribe(hired => {
      if (hired) {
        this.hired = true;
        this.refreshDevices();
      }
    }));
  }

  editDevice(device: Device): void {
    this.modalService.addModal(AppDeviceManagementEditDeviceModal, { device }).subscribe();
  }

  /**
   * Requests a devices list from MASC.
   */
  refreshDevices(): void {
    this.roleService.requestDeviceList();
  }
}
