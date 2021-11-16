import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardView } from './features/dashboard/dashboard-view/dashboard-view.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { HomeLayoutComponent } from './core/components/home-layout/home-layout.component';
import { SetRolesViewComponent } from './features/config/set-roles-view/set-roles-view.component';
import { NotFoundView } from './features/error-handling/not-found-view/not-found-view.component';
import { AppDeviceManagementView } from './features/app-device-management/app-device-management-view/app-device-management-view.component';
import { CommonModule } from '@angular/common';
import { AppFixtureManagementView } from './features/app-fixture-management/app-fixture-management-view/app-fixture-management-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardView,
      },
      {
        path: 'app',
        children: [
          {
            path: 'device-management',
            component: AppDeviceManagementView,
          },
          {
            path: 'fixture-management',
            component: AppFixtureManagementView,
          },
        ],
      },
      {
        path: 'set-roles',
        component: SetRolesViewComponent,
      },
      {
        path: '**',
        component: NotFoundView,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), CoreModule, FeaturesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
