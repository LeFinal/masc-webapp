import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRolesSetView } from './no-roles-set-view.component';

describe('NoRolesSetViewComponent', () => {
  let component: NoRolesSetView;
  let fixture: ComponentFixture<NoRolesSetView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoRolesSetView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRolesSetView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
