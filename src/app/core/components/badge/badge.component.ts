import { Component, Input } from '@angular/core';
import { styleClassFromCode, StyleCode } from '../../util/color-codes';

/**
 * Displays a badge.
 *
 * @author Lennart Altenhof
 */
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  styleClassFromCode = styleClassFromCode;

  @Input() color: StyleCode = 'base';
  /**
   * The label to display.
   */
  @Input() label = '';
}
