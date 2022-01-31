import { Component } from '@angular/core';
import { getLightSwitchName, LightSwitch } from '../../../core/models/light-switches';
import { SubscriptionComponent } from '../../../core/components/subscription-component';
import { RoleLightSwitchManagerService } from '../../../core/services/role-light-switch-manager.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { LightSwitchDetailsModal } from '../light-switch-details-modal/light-switch-details-modal.component';

@Component({
  selector: 'app-app-light-switch-management-view',
  templateUrl: './light-switch-management-view.component.html',
  styleUrls: ['./light-switch-management-view.component.scss'],
})
export class LightSwitchManagementView extends SubscriptionComponent {

  getLightSwitchTypeName = getLightSwitchName;

  hired = false;

  /**
   * List of light switches.
   */
  lightSwitchList?: LightSwitch[];

  constructor(private roleService: RoleLightSwitchManagerService, private modalService: SimpleModalService) {
    super();
    super.pushS(this.roleService.getLightSwitchList().subscribe(list => this.lightSwitchList = list));
    super.pushS(this.roleService.getOK().subscribe(() => this.refreshLightSwitches()));
    this.pushS(this.roleService.getHired().subscribe(hired => {
      this.hired = hired;
      if (hired) {
        this.refreshLightSwitches();
      }
    }));
  }

  /**
   * Opens a modal for editing the given light switch.
   *
   * @param lightSwitch The light switch to edit.
   */
  editLightSwitch(lightSwitch: LightSwitch): void {
    this.modalService.addModal(LightSwitchDetailsModal, { lightSwitch }).subscribe();
  }

  /**
   * Requests a light switch list from MASC.
   */
  refreshLightSwitches(): void {
    this.roleService.requestLightSwitches();
  }
}
