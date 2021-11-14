import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { styleClassFromCode, StyleCode } from '../../../util/color-codes';

export interface ConfirmModalOptions {
  title?: string;
  prompt?: string;
  color?: StyleCode;
}

/**
 * Modal for confirming stuff.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModal extends SimpleModalComponent<ConfirmModalOptions, boolean> implements ConfirmModalOptions {
  title?: string;
  prompt?: string;
  color: StyleCode = 'base';

  styleClassFromCode = styleClassFromCode;

  confirm(): void {
    this.result = true;
    super.close().then();
  }
}
