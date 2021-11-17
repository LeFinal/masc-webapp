import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFixtureOperationFixtureComponent } from './app-fixture-operation-fixture.component';

describe('AppFixtureOperationFixtureComponent', () => {
  let component: AppFixtureOperationFixtureComponent;
  let fixture: ComponentFixture<AppFixtureOperationFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFixtureOperationFixtureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFixtureOperationFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
