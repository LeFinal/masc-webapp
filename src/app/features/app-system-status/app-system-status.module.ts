import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSystemStatusView } from './app-system-status-view/app-system-status-view.component';
import { PublishedLogComponent } from './published-log/published-log.component';
import { PublishedLogEntryComponent } from './published-log-entry/published-log-entry.component';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [
    AppSystemStatusView,
    PublishedLogComponent,
    PublishedLogEntryComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
})
export class AppSystemStatusModule { }
