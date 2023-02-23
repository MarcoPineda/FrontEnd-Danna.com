import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOrdComponent } from './agregar-ord.component';

describe('AgregarOrdComponent', () => {
  let component: AgregarOrdComponent;
  let fixture: ComponentFixture<AgregarOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
