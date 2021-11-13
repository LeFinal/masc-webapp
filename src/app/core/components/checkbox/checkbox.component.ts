import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Items for {@link CheckboxComponent}.
 */
export interface CheckboxItem {
  display: string;
  value: string;
}

/**
 * Event emitted from {@link CheckboxComponent.stateChange}.
 */
export interface CheckboxChangeEvent {
  isChecked: boolean;
  item: CheckboxItem;
}

/**
 * Generic checkbox.
 */
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  /**
   * Whether the checkbox is checked.
   */
  @Input() checked = true;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() item: CheckboxItem = { display: 'Missing checkbox data', value: '' };

  @Output() stateChange = new EventEmitter<CheckboxChangeEvent>();

  onChange(isChecked: boolean): void {
    this.stateChange.next({ isChecked, item: this.item });
  }
}
