import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardView } from './dashboard-view/dashboard-view.component';
import { CoreModule } from '../../core/core.module';
import { DashboardAppComponent } from './dashboard-app/dashboard-app.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardView,
    DashboardAppComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
  ],
})
export class DashboardModule {
}
