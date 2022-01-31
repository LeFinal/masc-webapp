import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedLogEntryComponent } from './published-log-entry.component';

describe('PublishedLogEntryComponent', () => {
  let component: PublishedLogEntryComponent;
  let fixture: ComponentFixture<PublishedLogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedLogEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
