import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptTextInputModal } from './prompt-text-input-modal.component';

describe('PromptTextInputModalComponent', () => {
  let component: PromptTextInputModal;
  let fixture: ComponentFixture<PromptTextInputModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptTextInputModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptTextInputModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
