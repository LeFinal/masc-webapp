import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFixtureOperationView } from './app-fixture-operation-view.component';

describe('AppFixtureOperationViewComponent', () => {
  let component: AppFixtureOperationView;
  let fixture: ComponentFixture<AppFixtureOperationView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFixtureOperationView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFixtureOperationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
