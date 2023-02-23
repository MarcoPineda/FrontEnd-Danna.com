import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarArtComponent } from './agregar-art.component';

describe('AgregarArtComponent', () => {
  let component: AgregarArtComponent;
  let fixture: ComponentFixture<AgregarArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
