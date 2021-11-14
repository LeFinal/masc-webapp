import { Component, Input } from '@angular/core';
import { styleClassFromCode, StyleCode } from '../../util/color-codes';

/**
 * Generic button with label.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  styleClassFromCode = styleClassFromCode;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() color: StyleCode = 'base';
  @Input() disabled = false;
}
