import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdComponent } from './listar-ord.component';

describe('ListarOrdComponent', () => {
  let component: ListarOrdComponent;
  let fixture: ComponentFixture<ListarOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
