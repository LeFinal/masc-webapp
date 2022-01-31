import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLightSwitchModal } from './edit-light-switch-modal.component';

describe('EditLightSwitchModalComponent', () => {
  let component: EditLightSwitchModal;
  let fixture: ComponentFixture<EditLightSwitchModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLightSwitchModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLightSwitchModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
