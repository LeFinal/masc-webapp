import { Component, OnInit } from '@angular/core';
import { TokenDeviceID, TokenRoles, TokenService } from '../../../core/services/token.service';
import { getRoleByStr, getRolesFromStr, getRolesStrFromRoles, getRoleTypeName, RoleType } from '../../../core/models/acting';
import { CheckboxChangeEvent, CheckboxItem } from '../../../core/components/checkbox/checkbox.component';
import { CommunicationService } from '../../../core/services/communication.service';

/**
 * View for setting device roles.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-set-roles-view',
  templateUrl: './set-roles-view.component.html',
  styleUrls: ['./set-roles-view.component.scss'],
})
export class SetRolesViewComponent implements OnInit {

  getRoleByStr = getRoleByStr;
  availableRoles: CheckboxItem[];

  /**
   * The current roles.
   */
  selectedRoles?: RoleType[];
  identity?: string;

  constructor(communicationService: CommunicationService, private tokenService: TokenService) {
    this.availableRoles = Object.values(RoleType).map(rt => ({ display: getRoleTypeName(rt), value: rt }));
    communicationService.getCommunicationState().subscribe((_) => this.loadIdentity());
  }

  ngOnInit(): void {
    this.loadRoles();
  }

  /**
   * Saves {@link selectedRoles} to the {@link TokenService}.
   * @private
   */
  saveRoles(): void {
    if (this.selectedRoles) {
      this.tokenService.setItem(TokenRoles, getRolesStrFromRoles(this.selectedRoles));
    }
  }

  onRoleSelectChange(event: CheckboxChangeEvent): void {
    if (!this.selectedRoles) {
      return;
    }
    if (event.isChecked) {
      this.selectedRoles.push(getRoleByStr(event.item.value));
    } else {
      const i = this.selectedRoles.findIndex(r => r === event.item.value);
      this.selectedRoles.splice(i, 1);
    }
  }

  clearIdentity(): void {
    this.tokenService.removeItem(TokenDeviceID);
    this.identity = undefined;
  }

  /**
   * Loads the set roles from {@link TokenService} into {@link selectedRoles}.
   * @private
   */
  private loadRoles(): void {
    this.selectedRoles = getRolesFromStr(this.tokenService.getItem(TokenRoles));
  }

  /**
   * Loads the set device id from {@link TokenService} to {@link identity}.
   * @private
   */
  private loadIdentity(): void {
    this.identity = this.tokenService.getItem(TokenDeviceID);
  }
}
