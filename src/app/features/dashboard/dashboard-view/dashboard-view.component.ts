import { Component, OnInit } from '@angular/core';
import { getRolesFromStr, getRoleTypeName, RoleType } from '../../../core/models/acting';
import { TokenRoles, TokenService } from '../../../core/services/token.service';
import { Router } from '@angular/router';

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
export class DashboardView implements OnInit {

  getRoleTypeName = getRoleTypeName;
  roleType = RoleType;

  /**
   * Selected roles.
   * @private
   */
  private roles: RoleType[];

  constructor(tokenService: TokenService, private router: Router) {
    this.roles = getRolesFromStr(tokenService.getItem(TokenRoles));
  }

  ngOnInit(): void {
    if (this.roles.length === 0) {
      this.router.navigate(['no-roles-set']).then();
    }
  }

  hasRoleType(rt: RoleType): boolean {
    return this.roles.includes(rt);
  }
}
