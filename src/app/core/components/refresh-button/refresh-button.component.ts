import { Component, Input } from '@angular/core';

/**
 * Refresh button that includes an icon.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.scss'],
})
export class RefreshButtonComponent {
  @Input() label = 'Refresh';
}
