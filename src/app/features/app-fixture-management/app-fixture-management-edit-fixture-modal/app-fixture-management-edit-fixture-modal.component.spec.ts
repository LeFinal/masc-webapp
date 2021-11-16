import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFixtureManagementEditFixtureModal } from './app-fixture-management-edit-fixture-modal.component';

describe('AppFixtureManagementEditFixtureModalComponent', () => {
  let component: AppFixtureManagementEditFixtureModal;
  let fixture: ComponentFixture<AppFixtureManagementEditFixtureModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFixtureManagementEditFixtureModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFixtureManagementEditFixtureModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
