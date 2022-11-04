import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialComponent } from './addMaterial.component';

describe('AddMaterialComponent', () => {
  let component:  AddMaterialComponent;
  let fixture: ComponentFixture<AddMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  AddMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
