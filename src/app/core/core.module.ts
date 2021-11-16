import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { RouterModule } from '@angular/router';
import { CommunicationStateComponent } from './components/connection-state/communication-state.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionComponent } from './components/subscription-component';
import { PromptTextInputModal } from './components/modals/prompt-text-input-modal/prompt-text-input-modal.component';
import { RoleTypeComponent } from './components/role-type/role-type.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { ConfirmModal } from './components/modals/confirm-modal/confirm-modal.component';
import { OnlineStateComponent } from './components/online-state/online-state.component';
import { FixtureFeatureComponent } from './components/fixture-feature/fixture-feature.component';


@NgModule({
  declarations: [
    LogoComponent,
    HomeLayoutComponent,
    HomeHeaderComponent,
    CommunicationStateComponent,
    CheckboxComponent,
    ButtonComponent,
    SubscriptionComponent,
    PromptTextInputModal,
    RoleTypeComponent,
    RoleTypeComponent,
    RefreshButtonComponent,
    OnlineStateComponent,
    InputComponent,
    ConfirmModal,
    FixtureFeatureComponent,
  ],
  exports: [
    LogoComponent,
    CheckboxComponent,
    ButtonComponent,
    RoleTypeComponent,
    RefreshButtonComponent,
    OnlineStateComponent,
    FixtureFeatureComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
})
export class CoreModule {
}
