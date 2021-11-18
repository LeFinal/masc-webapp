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
import { AppTestFixtureProviderView } from './features/app-test-fixture-provider/app-test-fixture-provider-view/app-test-fixture-provider-view.component';
import { AppFixtureOperationView } from './features/app-fixture-operation/app-fixture-operation-view/app-fixture-operation-view.component';
import { NoRolesSetView } from './features/error-handling/no-roles-set-view/no-roles-set-view.component';

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
          {
            path: 'fixture-operation',
            component: AppFixtureOperationView,
          },
          {
            path: 'test-fixture-provider',
            component: AppTestFixtureProviderView,
          },
        ],
      },
      {
        path: 'set-roles',
        component: SetRolesViewComponent,
      },
    ],
  },
  {
    path: 'no-roles-set',
    component: NoRolesSetView,
  },
  {
    path: '**',
    component: NotFoundView,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), CoreModule, FeaturesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
