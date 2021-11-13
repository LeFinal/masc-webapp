import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardView } from './features/dashboard/dashboard-view/dashboard-view.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { HomeLayoutComponent } from './core/components/home-layout/home-layout.component';
import { SetRolesViewComponent } from './features/config/set-roles-view/set-roles-view.component';

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
        path: 'set-roles',
        component: SetRolesViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule, FeaturesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
