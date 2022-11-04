import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaterialsEmployeComponent } from './list-materials-employe.component';

describe('ListMaterialsEmployeComponent', () => {
  let component: ListMaterialsEmployeComponent;
  let fixture: ComponentFixture<ListMaterialsEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMaterialsEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaterialsEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
