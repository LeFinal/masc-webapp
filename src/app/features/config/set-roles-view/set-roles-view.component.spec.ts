import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRolesViewComponent } from './set-roles-view.component';

describe('SetRolesViewComponent', () => {
  let component: SetRolesViewComponent;
  let fixture: ComponentFixture<SetRolesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetRolesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRolesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
