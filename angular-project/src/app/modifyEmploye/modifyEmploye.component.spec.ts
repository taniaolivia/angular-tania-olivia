import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEmployeComponent } from './modifyEmploye.component';

describe('ModifyEmployeComponent', () => {
  let component: ModifyEmployeComponent;
  let fixture: ComponentFixture< ModifyEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( ModifyEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
