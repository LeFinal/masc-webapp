import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

/**
 * Generic input.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
  @Input() label?: string;
  @Input() hint?: string;
  @Input() defaultValue?: string;

  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.defaultValue && this.defaultValue !== undefined) {
      this.value = this.defaultValue;
    }
  }

  onValueChange(value: string): void {
    this.valueChange.next(value);
  }
}
