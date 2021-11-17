import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FixtureState } from '../../../core/models/lighting';

/**
 * Used for visualizing and controlling a {@link FixtureState}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-app-fixture-operation-fixture',
  templateUrl: './app-fixture-operation-fixture.component.html',
  styleUrls: ['./app-fixture-operation-fixture.component.scss'],
})
export class AppFixtureOperationFixtureComponent {
  /**
   * The fixture state to visualize with all the fixture information.
   */
  @Input() fixtureState?: FixtureState;
  /**
   * Emits when the fixture should be enabled/disabled.
   */
  @Output() enabledChange = new EventEmitter<boolean>();
  /**
   * Emits when the fixture should be (un)set in locating mode.
   */
  @Output() locatingChange = new EventEmitter<boolean>();

  /**
   * Emits {@link enabledChange} with inverted {@link fixtureState.is_enabled}.
   */
  toggleEnabled(): void {
    if (!this.fixtureState) {
      console.error('cannot toggle enabled-state when no fixture state set');
      return;
    }
    this.enabledChange.emit(!this.fixtureState.is_enabled);
  }

  /**
   * Emits {@link locatingChange} with inverted {@link fixtureState.is_locating} and stops bubbling.
   */
  toggleLocating(event: MouseEvent): void {
    event.cancelBubble = true;
    if (!this.fixtureState) {
      console.error('cannot toggle locating-mode when no fixture state set');
      return;
    }
    if (!this.fixtureState.is_enabled) {
      // Skip because not enabled.
      return;
    }
    this.locatingChange.emit(!this.fixtureState.is_locating);
  }
}
