import { Component } from '@angular/core';
import { FixtureProviderFixtureState, RoleFixtureProviderService } from '../../../core/services/role-fixture-provider.service';
import { MessageFixtureBasicState, MessageFixtureDimmerState } from '../../../core/messages/lighting';
import { FixtureType } from '../../../core/models/lighting';

/**
 * View for testing fixtures.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-app-test-fixture-provider-view',
  templateUrl: './app-test-fixture-provider-view.component.html',
  styleUrls: ['./app-test-fixture-provider-view.component.scss'],
})
export class AppTestFixtureProviderView {

  fixtureBasicStates: MessageFixtureBasicState[] = [];
  fixtureDimmerStates: MessageFixtureDimmerState[] = [];

  constructor(private fixtureProviderService: RoleFixtureProviderService) {
    fixtureProviderService.getFixtureStates().subscribe(state => this.handleFixtureState(state));
  }

  /**
   * Updates the correct fixture state with the given update.
   * @param state The new state.
   * @private
   */
  private handleFixtureState(state: FixtureProviderFixtureState): void {
    let i: number;
    switch (state.fixtureType) {
      case FixtureType.Basic:
        const fixtureBasicState = state.messageContent as MessageFixtureBasicState;
        i = this.fixtureBasicStates.findIndex(f => f.fixture === fixtureBasicState.fixture);
        if (i === -1) {
          this.fixtureBasicStates.push(fixtureBasicState);
        } else {
          this.fixtureBasicStates[i] = fixtureBasicState;
        }
        break;
      case FixtureType.Dimmer:
        const fixtureDimmerState = state.messageContent as MessageFixtureDimmerState;
        i = this.fixtureDimmerStates.findIndex(f => f.fixture === fixtureDimmerState.fixture);
        if (i === -1) {
          this.fixtureDimmerStates.push(fixtureDimmerState);
        } else {
          this.fixtureDimmerStates[i] = fixtureDimmerState;
        }
        break;
    }
  }
}
