import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdComponent } from './editar-ord.component';

describe('EditarOrdComponent', () => {
  let component: EditarOrdComponent;
  let fixture: ComponentFixture<EditarOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
