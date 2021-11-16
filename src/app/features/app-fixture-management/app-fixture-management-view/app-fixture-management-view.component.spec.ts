import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFixtureManagementView } from './app-fixture-management-view.component';

describe('AppFixtureManagementViewComponent', () => {
  let component: AppFixtureManagementView;
  let fixture: ComponentFixture<AppFixtureManagementView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFixtureManagementView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFixtureManagementView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
