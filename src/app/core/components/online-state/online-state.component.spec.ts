import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStateComponent } from './online-state.component';

describe('AppDeviceManagementConnectedStateComponent', () => {
  let component: OnlineStateComponent;
  let fixture: ComponentFixture<OnlineStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
