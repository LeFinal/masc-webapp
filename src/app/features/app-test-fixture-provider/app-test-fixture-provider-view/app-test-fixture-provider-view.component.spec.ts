import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestFixtureProviderView } from './app-test-fixture-provider-view.component';

describe('AppTestFixtureProviderViewComponent', () => {
  let component: AppTestFixtureProviderView;
  let fixture: ComponentFixture<AppTestFixtureProviderView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTestFixtureProviderView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTestFixtureProviderView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
