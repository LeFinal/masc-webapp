import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardView } from './dashboard-view/dashboard-view.component';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [
    DashboardView
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
})
export class DashboardModule { }
