import { Component } from '@angular/core';
import { SubscriptionComponent } from '../../../core/components/subscription-component';
import { SimpleModalService } from 'ngx-simple-modal';
import { Fixture, getFixtureTypeName } from '../../../core/models/lighting';
import { RoleFixtureManagerService } from '../../../core/services/role-fixture-manager.service';
import { AppFixtureManagementEditFixtureModal } from '../app-fixture-management-edit-fixture-modal/app-fixture-management-edit-fixture-modal.component';

/**
 * View for managing fixtures.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-app-fixture-management-view',
  templateUrl: './app-fixture-management-view.component.html',
  styleUrls: ['./app-fixture-management-view.component.scss'],
})
export class AppFixtureManagementView extends SubscriptionComponent {

  getFixtureTypeName = getFixtureTypeName;

  hired = false;

  /**
   * List of fixtures.
   */
  fixtureList?: Fixture[];

  constructor(private roleService: RoleFixtureManagerService, private modalService: SimpleModalService) {
    super();
    super.pushS(this.roleService.getFixtureList().subscribe(list => this.fixtureList = list));
    super.pushS(this.roleService.getOK().subscribe(() => this.refreshFixtures()));
    super.pushS(this.roleService.getHired().subscribe(hired => {
      if (hired) {
        this.hired = true;
        this.refreshFixtures();
      }
    }));
  }

  editFixture(fixture: Fixture): void {
    this.modalService.addModal(AppFixtureManagementEditFixtureModal, { fixture }).subscribe();
  }

  /**
   * Requests a fixture list from MASC.
   */
  refreshFixtures(): void {
    this.roleService.requestFixtureList();
  }
}
