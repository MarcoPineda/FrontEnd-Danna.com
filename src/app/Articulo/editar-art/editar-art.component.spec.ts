import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArtComponent } from './editar-art.component';

describe('EditarArtComponent', () => {
  let component: EditarArtComponent;
  let fixture: ComponentFixture<EditarArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
