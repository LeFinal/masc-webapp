import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitchDetailsModal } from './light-switch-details-modal.component';

describe('EditLightSwitchModalComponent', () => {
  let component: LightSwitchDetailsModal;
  let fixture: ComponentFixture<LightSwitchDetailsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightSwitchDetailsModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSwitchDetailsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
