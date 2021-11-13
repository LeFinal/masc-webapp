import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationState } from './communication-state.component';

describe('ConnectionStateComponent', () => {
  let component: CommunicationState;
  let fixture: ComponentFixture<CommunicationState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationState ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
