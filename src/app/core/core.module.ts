import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { RouterModule } from '@angular/router';
import { CommunicationStateComponent } from './components/connection-state/communication-state.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    LogoComponent,
    HomeLayoutComponent,
    HomeHeaderComponent,
    CommunicationStateComponent,
    CheckboxComponent,
    ButtonComponent,
  ],
  exports: [
    LogoComponent,
    CheckboxComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
})
export class CoreModule {
}
