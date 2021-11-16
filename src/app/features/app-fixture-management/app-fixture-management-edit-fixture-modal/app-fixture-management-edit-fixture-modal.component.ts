import { Component } from '@angular/core';
import { Fixture, FixtureType, getFixtureFeatureByStr } from '../../../core/models/lighting';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import { ConfirmModal } from '../../../core/components/modals/confirm-modal/confirm-modal.component';
import { PromptTextInputModal } from '../../../core/components/modals/prompt-text-input-modal/prompt-text-input-modal.component';
import { RoleFixtureManagerService } from '../../../core/services/role-fixture-manager.service';

export interface AppFixtureManagementEditFixtureModalOptions {
  fixture: Fixture;
}

/**
 * Modal for editing a {@link Fixture}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-app-fixture-management-edit-fixture-modal',
  templateUrl: './app-fixture-management-edit-fixture-modal.component.html',
  styleUrls: ['./app-fixture-management-edit-fixture-modal.component.scss'],
})
export class AppFixtureManagementEditFixtureModal extends SimpleModalComponent<AppFixtureManagementEditFixtureModalOptions, undefined>
  implements AppFixtureManagementEditFixtureModalOptions {

  getFixtureFeatureByStr = getFixtureFeatureByStr;

  /**
   * The fixture to edit.
   */
  fixture: Fixture = {
    id: -1,
    device_id: '',
    is_online: false,
    last_seen: new Date(),
    features: [],
    is_enabled: false,
    type: FixtureType.Basic,
    provider_id: '',
  };

  constructor(private fixtureManagerService: RoleFixtureManagerService, private modalService: SimpleModalService) {
    super();
  }

  /**
   * Opens a confirmation modal for deletion and then deletes the fixture if confirmed.
   */
  delete(): void {
    this.modalService.addModal(ConfirmModal, {
      title: 'Delete Fixture',
      prompt: 'Do you really want to delete the fixture?',
      color: 'danger',
    }).subscribe(confirmed => {
      if (!confirmed) {
        return;
      }
      this.fixtureManagerService.deleteFixture(this.fixture.id);
      this.close().then();
    });
  }

  /**
   * Opens an edit modal for setting the fixture name.
   */
  editName(): void {
    this.modalService.addModal(PromptTextInputModal, {
      title: 'Edit Name',
      prompt: 'Enter the new fixture name:',
      defaultValue: this.fixture.name,
      hint: 'Fixture name',
    }).subscribe(name => {
      if (!name) {
        return;
      }
      this.fixtureManagerService.setFixtureName(this.fixture.id, name);
      this.close().then();
    });
  }
}

