import { Component, OnDestroy } from '@angular/core';
import { MessageUpdateLightSwitch } from '../../../core/messages/light-switches';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import { RoleLightSwitchManagerService } from '../../../core/services/role-light-switch-manager.service';
import { Fixture } from '../../../core/models/lighting';
import { Subscription } from 'rxjs';

export interface EditLightSwitchModalOptions {
  content: MessageUpdateLightSwitch;
}

/**
 * Component for editing a light switch.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-edit-light-switch-modal',
  templateUrl: './edit-light-switch-modal.component.html',
  styleUrls: ['./edit-light-switch-modal.component.scss'],
})
export class EditLightSwitchModal extends SimpleModalComponent<EditLightSwitchModalOptions, undefined>
  implements EditLightSwitchModalOptions, OnDestroy {

  /**
   * Fixture list for displaying assignment options.
   */
  fixtureList?: Fixture[];

  content: MessageUpdateLightSwitch = {
    light_switch_id: -1,
    name: '',
    assignments: [],
  };

  private s: Subscription[] = [];

  constructor(private lightSwitchManagerService: RoleLightSwitchManagerService, private modalService: SimpleModalService) {
    super();
    this.s.push(lightSwitchManagerService.getFixtureList().subscribe(fixtureList => this.fixtureList = fixtureList));
    this.s.push(lightSwitchManagerService.getHired().subscribe(isHired => {
      if (isHired) {
        lightSwitchManagerService.requestFixtureList();
      }
    }));
  }

  save(): void {
    this.lightSwitchManagerService.updateLightSwitchByID(this.content.light_switch_id, this.content.name, this.content.assignments);
    this.close().then();
  }

  ngOnDestroy(): void {
    this.s.forEach(s => s.unsubscribe());
  }

  /**
   * Applies the assigned state to {@link content.assignments}.
   *
   * @param fixture The fixture to (un)assign.
   * @param isAssigned Whether the fixture should be (un)assigned.
   */
  setAssignedState(fixture: number, isAssigned: boolean): void {
    // Remove.
    this.content.assignments = this.content.assignments.filter(a => a !== fixture);
    // Now check if we need to add.
    if (isAssigned) {
      this.content.assignments.push(fixture);
    }
  }
}
