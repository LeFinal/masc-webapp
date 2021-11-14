import { Component } from '@angular/core';
import { getRolesFromStr, getRoleTypeName, RoleType } from '../../../core/models/acting';
import { TokenRoles, TokenService } from '../../../core/services/token.service';

/**
 * The dashboard view with available apps.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardView {

  getRoleTypeName = getRoleTypeName;
  roleType = RoleType;

  /**
   * Selected roles.
   * @private
   */
  private roles: RoleType[];

  constructor(tokenService: TokenService) {
    this.roles = getRolesFromStr(tokenService.getItem(TokenRoles));
  }

  hasRoleType(rt: RoleType): boolean {
    return this.roles.includes(rt);
  }
}
