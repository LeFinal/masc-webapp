import { Component, Input } from '@angular/core';

/**
 * Display the connected state with color icon.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-app-device-management-connected-state',
  templateUrl: './app-device-management-connected-state.component.html',
  styleUrls: ['./app-device-management-connected-state.component.scss'],
})
export class AppDeviceManagementConnectedStateComponent {
  @Input() connected = false;
}
