import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface PromptTextInputModalOptions {
  title: string;
  prompt: string;
  defaultValue?: string;
  hint?: string;
}

/**
 * Modal for prompting text input.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-prompt-text-input-modal',
  templateUrl: './prompt-text-input-modal.component.html',
  styleUrls: ['./prompt-text-input-modal.component.scss'],
})
export class PromptTextInputModal extends SimpleModalComponent<PromptTextInputModalOptions, string | undefined>
  implements PromptTextInputModalOptions {
  title = '';
  prompt = '';
  defaultValue?: string;
  hint?: string;

  value?: string;

  constructor() {
    super();
  }

  confirm(): void {
    if (this.value !== undefined && this.value !== '') {
      this.result = this.value;
    }
    this.close().then();
  }

  onValueChange(newValue: string): void {
    this.value = newValue;
  }
}
