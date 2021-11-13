import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardView } from './dashboard-view.component';

describe('DashboardViewComponent', () => {
  let component: DashboardView;
  let fixture: ComponentFixture<DashboardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
