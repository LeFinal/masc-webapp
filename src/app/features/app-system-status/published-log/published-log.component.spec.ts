import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedLogComponent } from './published-log.component';

describe('PublishedLogComponent', () => {
  let component: PublishedLogComponent;
  let fixture: ComponentFixture<PublishedLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
