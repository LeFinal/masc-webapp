import { Component } from '@angular/core';
import { RoleFixtureOperatorService } from '../../../core/services/role-fixture-operator.service';
import { FixtureState } from '../../../core/models/lighting';
import { filter } from 'rxjs/operators';

/**
 * View for operating fixtures.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-app-fixture-operation-view',
  templateUrl: './app-fixture-operation-view.component.html',
  styleUrls: ['./app-fixture-operation-view.component.scss'],
})
export class AppFixtureOperationView {

  /**
   * The fixture states
   */
  fixtureStates: FixtureState[] = [];
  /**
   * Fixture states for online fixtures.
   */
  onlineFixtureStates: FixtureState[] = [];

  constructor(private fixtureOperatorService: RoleFixtureOperatorService) {
    fixtureOperatorService.getHired().pipe(filter(h => h)).subscribe(() => this.fixtureOperatorService.requestFixtureStates());
    fixtureOperatorService.getFixtureStates().subscribe(states => {
      this.fixtureStates = states;
      this.onlineFixtureStates = this.fixtureStates.filter(fs => fs.is_online);
    });
  }

  /**
   * Sets the enabled-state for the given fixture.
   * @param fixtureID The fixture to set the enabled-state for.
   * @param isEnabled Whether the fixture should be enabled.
   */
  setFixtureEnabled(fixtureID: number, isEnabled: boolean): void {
    this.fixtureOperatorService.setFixtureEnabled([{ fixture_id: fixtureID, is_enabled: isEnabled }]);
  }

  /**
   * Sets the locating-mode for the given fixture.
   * @param fixtureID The fixture to set the locating-mode for.
   * @param isLocating Whether locating-mode should be enabled.
   */
  setFixtureLocating(fixtureID: number, isLocating: boolean): void {
    this.fixtureOperatorService.setFixtureLocating([{ fixture_id: fixtureID, is_locating: isLocating }]);
  }
}
