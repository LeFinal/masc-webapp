import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetRolesViewComponent } from './set-roles-view/set-roles-view.component';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [
    SetRolesViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
})
export class ConfigModule { }
