import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureFeatureComponent } from './fixture-feature.component';

describe('FixtureFeatureTypeComponent', () => {
  let component: FixtureFeatureComponent;
  let fixture: ComponentFixture<FixtureFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
