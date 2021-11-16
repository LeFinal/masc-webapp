import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFixtureManagementView } from './app-fixture-management-view/app-fixture-management-view.component';
import { AppFixtureManagementEditFixtureModal } from './app-fixture-management-edit-fixture-modal/app-fixture-management-edit-fixture-modal.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    AppFixtureManagementView,
    AppFixtureManagementEditFixtureModal,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
})
export class AppFixtureManagementModule {
}
