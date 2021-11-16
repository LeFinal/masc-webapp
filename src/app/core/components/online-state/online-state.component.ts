import { Component, Input } from '@angular/core';

/**
 * Display the connected state with color icon.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-online-state',
  templateUrl: './online-state.component.html',
  styleUrls: ['./online-state.component.scss'],
})
export class OnlineStateComponent {
  @Input() online = false;
}
