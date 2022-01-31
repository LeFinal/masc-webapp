import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitchManagementView } from './light-switch-management-view.component';

describe('ManagementViewComponent', () => {
  let component: LightSwitchManagementView;
  let fixture: ComponentFixture<LightSwitchManagementView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightSwitchManagementView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSwitchManagementView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
