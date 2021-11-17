import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFixtureOperationView } from './app-fixture-operation-view/app-fixture-operation-view.component';
import { AppFixtureOperationFixtureComponent } from './app-fixture-operation-fixture/app-fixture-operation-fixture.component';



@NgModule({
  declarations: [
    AppFixtureOperationView,
    AppFixtureOperationFixtureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppFixtureOperationModule { }
