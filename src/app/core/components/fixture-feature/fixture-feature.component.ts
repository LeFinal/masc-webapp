import { Component, Input } from '@angular/core';
import { FixtureFeature } from '../../models/lighting';

/**
 * Displays the {@link FixtureFeature} with an icon and human-readable name.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-fixture-feature',
  templateUrl: './fixture-feature.component.html',
  styleUrls: ['./fixture-feature.component.scss'],
})
export class FixtureFeatureComponent {

  fixtureFeature = FixtureFeature;
  @Input() ff?: FixtureFeature;

  isUnknown(): boolean {
    if (!this.ff) {
      return true;
    }
    return !Object.values(FixtureFeature).includes(this.ff);
  }
}
