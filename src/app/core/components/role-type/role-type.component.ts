import { Component, Input } from '@angular/core';
import { RoleType } from '../../models/acting';

/**
 * Displays the {@link RoleType} with an icon and human-readable name.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-role-type',
  templateUrl: './role-type.component.html',
  styleUrls: ['./role-type.component.scss'],
})
export class RoleTypeComponent {
  roleType = RoleType;
  @Input() rt?: RoleType;

  isUnknown(): boolean {
    if (!this.rt) {
      return true;
    }
    return !Object.values(RoleType).includes(this.rt);
  }
}
