import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundView } from './not-found-view/not-found-view.component';
import { NoRolesSetView } from './no-roles-set-view/no-roles-set-view.component';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundView,
    NoRolesSetView
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
  ],
})
export class ErrorHandlingModule { }
