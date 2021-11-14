import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { ConnectionService } from './core/services/connection.service';
import { CommunicationService } from './core/services/communication.service';
import { CommonModule } from '@angular/common';
import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    SimpleModalModule.forRoot({ container: document.body }, {
      ...defaultSimpleModalOptions,
      ...{
        animationDuration: 0,
        closeOnClickOutside: true,
      },
    }),
  ],
  providers: [
    ConnectionService,
    CommunicationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
